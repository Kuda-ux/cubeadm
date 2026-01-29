-- CubeADM Database Schema for Supabase
-- Run this SQL in your Supabase SQL Editor (Dashboard > SQL Editor > New Query)
-- Website: https://kubeadm.co.zw

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- =====================================================
-- STEP 1: Drop existing tables to avoid conflicts
-- Run this section FIRST if you have existing tables
-- =====================================================

-- Drop dependent tables first (order matters due to foreign keys)
DROP TABLE IF EXISTS cart_items CASCADE;
DROP TABLE IF EXISTS orders CASCADE;
DROP TABLE IF EXISTS products CASCADE;

-- =====================================================
-- STEP 2: Create Core Website Tables
-- =====================================================

-- Contacts Table (for contact form submissions)
CREATE TABLE IF NOT EXISTS contacts (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  role TEXT,
  contact_type TEXT DEFAULT 'client',
  message TEXT,
  notes TEXT,
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'read', 'replied'))
);

-- Enrollments Table (for training program enrollments)
CREATE TABLE IF NOT EXISTS enrollments (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  course TEXT NOT NULL,
  message TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'completed'))
);

-- Newsletter Subscribers Table
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  email TEXT UNIQUE NOT NULL,
  subscribed BOOLEAN DEFAULT true
);

-- Quote Requests Table (for service quote requests)
CREATE TABLE IF NOT EXISTS quote_requests (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  service TEXT NOT NULL,
  budget TEXT,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'quoted', 'closed'))
);

-- Enable Row Level Security (RLS)
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE enrollments ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE quote_requests ENABLE ROW LEVEL SECURITY;

-- Create policies to allow anonymous inserts (for form submissions)
DROP POLICY IF EXISTS "Allow anonymous inserts" ON contacts;
DROP POLICY IF EXISTS "Allow anonymous inserts" ON enrollments;
DROP POLICY IF EXISTS "Allow anonymous inserts" ON newsletter_subscribers;
DROP POLICY IF EXISTS "Allow anonymous inserts" ON quote_requests;
DROP POLICY IF EXISTS "Service role full access contacts" ON contacts;

CREATE POLICY "Allow anonymous inserts" ON contacts FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow anonymous inserts" ON enrollments FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow anonymous inserts" ON newsletter_subscribers FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow anonymous inserts" ON quote_requests FOR INSERT WITH CHECK (true);
CREATE POLICY "Service role full access contacts" ON contacts FOR ALL USING (true);

-- =====================================================
-- STEP 3: E-Commerce Tables (Products, Cart, Orders)
-- =====================================================

-- Products Table (UUID primary key)
CREATE TABLE IF NOT EXISTS products (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  sku TEXT,
  name TEXT NOT NULL,
  category TEXT NOT NULL,
  brand TEXT,
  description TEXT,
  image_url TEXT,
  price DECIMAL(10,2) NOT NULL DEFAULT 0,
  cost_price DECIMAL(10,2),
  stock_quantity INTEGER DEFAULT 0,
  reorder_level INTEGER DEFAULT 5,
  rating DECIMAL(2,1) DEFAULT 4.5,
  in_stock BOOLEAN DEFAULT true,
  featured BOOLEAN DEFAULT false,
  is_active BOOLEAN DEFAULT true,
  specs JSONB
);

-- Shopping Cart Table
CREATE TABLE IF NOT EXISTS cart_items (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  product_id UUID REFERENCES products(id) ON DELETE CASCADE,
  quantity INTEGER DEFAULT 1 CHECK (quantity > 0),
  UNIQUE(user_id, product_id)
);

-- Orders Table (for e-commerce)
CREATE TABLE IF NOT EXISTS orders (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  user_id UUID REFERENCES auth.users(id),
  user_email TEXT NOT NULL,
  user_name TEXT NOT NULL,
  user_phone TEXT,
  company TEXT,
  items JSONB NOT NULL,
  total DECIMAL(10,2) NOT NULL,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'processing', 'completed', 'cancelled')),
  notes TEXT
);

-- Enable RLS on new tables
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE cart_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

-- Drop existing policies first to avoid conflicts
DROP POLICY IF EXISTS "Anyone can view products" ON products;
DROP POLICY IF EXISTS "Users can view own cart" ON cart_items;
DROP POLICY IF EXISTS "Users can add to own cart" ON cart_items;
DROP POLICY IF EXISTS "Users can update own cart" ON cart_items;
DROP POLICY IF EXISTS "Users can delete from own cart" ON cart_items;
DROP POLICY IF EXISTS "Users can view own orders" ON orders;
DROP POLICY IF EXISTS "Users can create orders" ON orders;

-- Products: Anyone can read
CREATE POLICY "Anyone can view products" ON products FOR SELECT USING (true);

-- Cart: Users can manage their own cart
CREATE POLICY "Users can view own cart" ON cart_items FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can add to own cart" ON cart_items FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own cart" ON cart_items FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can delete from own cart" ON cart_items FOR DELETE USING (auth.uid() = user_id);

-- Orders: Users can view and create their own orders
CREATE POLICY "Users can view own orders" ON orders FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can create orders" ON orders FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_contacts_created_at ON contacts(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contacts_status ON contacts(status);
CREATE INDEX IF NOT EXISTS idx_enrollments_created_at ON enrollments(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_enrollments_course ON enrollments(course);
CREATE INDEX IF NOT EXISTS idx_newsletter_email ON newsletter_subscribers(email);
CREATE INDEX IF NOT EXISTS idx_quote_requests_created_at ON quote_requests(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_products_category ON products(category);
CREATE INDEX IF NOT EXISTS idx_products_brand ON products(brand);
CREATE INDEX IF NOT EXISTS idx_cart_items_user ON cart_items(user_id);
CREATE INDEX IF NOT EXISTS idx_orders_user ON orders(user_id);
CREATE INDEX IF NOT EXISTS idx_orders_status ON orders(status);

-- Insert sample products with specs
INSERT INTO products (name, category, brand, description, image_url, price, rating, in_stock, featured, specs) VALUES
-- Computing
('HP ProBook 450 G10', 'computing', 'HP', 'Business laptop with Intel Core i7, 16GB RAM, 512GB SSD. Perfect for enterprise users who need reliable performance and security features.', 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&q=80', 1299.00, 4.8, true, true, '{"processor": "Intel Core i7-1355U", "memory": "16GB DDR4", "storage": "512GB NVMe SSD", "display": "15.6 inch FHD IPS", "graphics": "Intel Iris Xe", "battery": "Up to 10 hours", "os": "Windows 11 Pro", "warranty": "3 Years"}'),
('Dell OptiPlex 7010', 'computing', 'Dell', 'Desktop computer for enterprise, Intel Core i5, 8GB RAM. Compact and powerful for office productivity.', 'https://images.unsplash.com/photo-1593062096033-9a26b09da705?w=600&q=80', 899.00, 4.7, true, false, '{"processor": "Intel Core i5-13500", "memory": "8GB DDR5", "storage": "256GB NVMe SSD", "form_factor": "Small Form Factor", "graphics": "Intel UHD 770", "ports": "USB-C, USB-A, HDMI, DP", "os": "Windows 11 Pro", "warranty": "3 Years"}'),
('Lenovo ThinkPad X1 Carbon', 'computing', 'Lenovo', 'Ultra-thin business laptop, 14 inch display, Intel Core i7. Premium build quality with military-grade durability.', 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=600&q=80', 1899.00, 4.9, true, true, '{"processor": "Intel Core i7-1365U", "memory": "16GB LPDDR5", "storage": "512GB NVMe SSD", "display": "14 inch 2.8K OLED", "graphics": "Intel Iris Xe", "battery": "Up to 15 hours", "weight": "1.12 kg", "warranty": "3 Years"}'),
('Dell UltraSharp 27 Monitor', 'computing', 'Dell', '4K USB-C Hub Monitor, 27 inch IPS, 60Hz. Professional color accuracy for creative work.', 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600&q=80', 649.00, 4.8, true, false, '{"resolution": "3840 x 2160 4K", "panel_type": "IPS", "refresh_rate": "60Hz", "connectivity": "USB-C 90W, HDMI, DP", "color_accuracy": "99% sRGB", "hdr": "HDR400", "size": "27 inches", "warranty": "3 Years"}'),
-- Networking
('Cisco Catalyst 9200 Switch', 'networking', 'Cisco', '24-port Gigabit Ethernet switch with PoE+. Enterprise-grade switching with advanced security.', 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80', 2499.00, 4.9, true, true, '{"ports": "24x 1GbE PoE+", "uplinks": "4x 10G SFP+", "poe_budget": "370W", "switching_capacity": "128 Gbps", "management": "Cisco DNA Center", "security": "MACsec, TrustSec", "stacking": "StackWise-160", "warranty": "Limited Lifetime"}'),
('Huawei S5735-L24T4S', 'networking', 'Huawei', '24-port Gigabit managed switch with 4 SFP+ ports. Cost-effective enterprise switching.', 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&q=80', 1899.00, 4.7, true, false, '{"ports": "24x 1GbE", "uplinks": "4x 10G SFP+", "switching_capacity": "336 Gbps", "management": "Web, CLI, SNMP", "features": "VLAN, QoS, ACL", "stacking": "iStack", "power": "AC/DC", "warranty": "3 Years"}'),
('Cisco Meraki MR46', 'networking', 'Cisco', 'Cloud-managed Wi-Fi 6 access point. Enterprise wireless with zero-touch deployment.', 'https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=600&q=80', 899.00, 4.8, true, true, '{"wifi_standard": "Wi-Fi 6 (802.11ax)", "radios": "Dual-band 2.4/5 GHz", "max_speed": "3.5 Gbps", "mimo": "4x4:4 MU-MIMO", "management": "Meraki Cloud", "security": "WPA3, 802.1X", "poe": "802.3at PoE+", "warranty": "Limited Lifetime"}'),
('Fortinet FortiGate 60F', 'networking', 'Fortinet', 'Next-gen firewall with SD-WAN capabilities. Comprehensive security for small businesses.', 'https://images.unsplash.com/photo-1563770660941-20978e870e26?w=600&q=80', 1299.00, 4.9, true, false, '{"throughput": "10 Gbps Firewall", "threat_protection": "700 Mbps", "vpn": "6.5 Gbps IPsec", "interfaces": "10x GbE", "features": "SD-WAN, IPS, AV, Web Filter", "management": "FortiManager", "users": "Up to 200", "warranty": "1 Year"}'),
-- Servers
('Dell PowerEdge R750', 'servers', 'Dell', '2U rack server, dual Intel Xeon, 64GB RAM. High-performance computing for demanding workloads.', 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80', 8999.00, 4.9, true, true, '{"processor": "2x Intel Xeon Gold 5318Y", "memory": "64GB DDR4 ECC", "storage": "2x 480GB SSD RAID", "drive_bays": "8x 2.5 inch SAS/SATA", "raid": "PERC H755", "network": "2x 10GbE", "power": "2x 800W Redundant", "warranty": "3 Years ProSupport"}'),
('HPE ProLiant DL380 Gen10', 'servers', 'HPE', '2U rack server with Intel Xeon Scalable processors. Industry-leading reliability and performance.', 'https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=600&q=80', 7499.00, 4.8, true, false, '{"processor": "2x Intel Xeon Silver 4314", "memory": "32GB DDR4 ECC", "storage": "2x 300GB SAS", "drive_bays": "8x SFF", "raid": "HPE Smart Array P408i-a", "network": "4x 1GbE", "power": "2x 500W Redundant", "warranty": "3 Years"}'),
('Synology DS1821+', 'servers', 'Synology', '8-bay NAS with AMD Ryzen, 4GB RAM expandable. Enterprise storage with comprehensive apps.', 'https://images.unsplash.com/photo-1600267185393-e158a98703de?w=600&q=80', 1099.00, 4.8, true, true, '{"processor": "AMD Ryzen V1500B", "memory": "4GB DDR4 (max 32GB)", "drive_bays": "8x 3.5/2.5 inch", "max_capacity": "144TB", "network": "4x 1GbE", "expansion": "2x eSATA", "features": "DSM, Hyper Backup, Surveillance", "warranty": "3 Years"}'),
('Dell EMC PowerVault ME5', 'servers', 'Dell', 'Entry-level SAN storage array, 25 drive bays. Affordable shared storage for SMBs.', 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80', 12999.00, 4.7, false, false, '{"drive_bays": "25x 2.5 inch SAS", "max_capacity": "4PB", "controllers": "Dual Active", "cache": "8GB per controller", "connectivity": "iSCSI, FC, SAS", "raid_levels": "0, 1, 5, 6, 10", "features": "Snapshots, Replication", "warranty": "3 Years ProSupport"}'),
-- Cloud
('VMware vSphere Standard', 'cloud', 'VMware', 'Virtualization platform license per processor. Industry-leading hypervisor technology.', 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80', 1499.00, 4.9, true, true, '{"license_type": "Per Processor", "vcpus": "Unlimited", "vram": "Unlimited", "features": "vMotion, HA, DRS", "management": "vCenter Server", "support": "1 Year SnS", "deployment": "On-premises", "warranty": "Software License"}'),
('Nutanix HCI Starter Pack', 'cloud', 'Nutanix', 'Hyper-converged infrastructure starter bundle. Simplified datacenter in a box.', 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&q=80', 24999.00, 4.8, true, false, '{"nodes": "3-Node Cluster", "hypervisor": "AHV or ESXi", "storage": "Hybrid or All-Flash", "features": "AOS, Prism, Files", "management": "Prism Central", "support": "1 Year", "deployment": "On-premises/Cloud", "warranty": "3 Years"}'),
('Microsoft Azure Stack HCI', 'cloud', 'Microsoft', 'Hybrid cloud solution with Azure integration. Run Azure services on-premises.', 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600&q=80', 19999.00, 4.7, true, true, '{"nodes": "2-16 Node Cluster", "hypervisor": "Azure Stack HCI OS", "storage": "Storage Spaces Direct", "features": "Azure Arc, AKS, AVD", "management": "Windows Admin Center", "licensing": "Per Core", "integration": "Azure Portal", "warranty": "Hardware Dependent"}'),
('Veeam Backup & Replication', 'cloud', 'Veeam', 'Enterprise backup solution for virtual environments. Comprehensive data protection.', 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80', 2999.00, 4.9, true, false, '{"license_type": "Per Workload", "platforms": "VMware, Hyper-V, AWS, Azure", "features": "Backup, Replication, CDP", "recovery": "Instant VM Recovery", "storage": "Any Storage Target", "support": "1 Year", "deployment": "On-premises/Cloud", "warranty": "Software License"}');

-- =====================================================
-- STEP 4: CIMS Admin Dashboard Tables
-- These tables power the admin dashboard at https://kubeadm.co.zw/admin
-- =====================================================

-- Students Table (Training Module)
CREATE TABLE IF NOT EXISTS students (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  student_number TEXT UNIQUE,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT,
  phone TEXT,
  date_of_birth DATE,
  gender TEXT,
  national_id TEXT,
  address TEXT,
  city TEXT,
  country TEXT DEFAULT 'Zimbabwe',
  education_level TEXT,
  occupation TEXT,
  employer TEXT,
  emergency_contact_name TEXT,
  emergency_contact_phone TEXT,
  photo_url TEXT,
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'inactive', 'graduated', 'suspended')),
  notes TEXT
);

-- Courses Table (Training Module)
CREATE TABLE IF NOT EXISTS courses (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  name TEXT NOT NULL,
  code TEXT,
  description TEXT,
  category TEXT,
  duration_hours INTEGER,
  duration_weeks INTEGER,
  price DECIMAL(10,2),
  currency TEXT DEFAULT 'USD',
  certification_body TEXT,
  prerequisites TEXT,
  max_students INTEGER DEFAULT 20,
  is_active BOOLEAN DEFAULT true,
  image_url TEXT
);

-- Clients Table (Projects Module)
CREATE TABLE IF NOT EXISTS clients (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  company_name TEXT NOT NULL,
  contact_person TEXT,
  email TEXT,
  phone TEXT,
  address TEXT,
  city TEXT,
  country TEXT DEFAULT 'Zimbabwe',
  industry TEXT,
  website TEXT,
  tax_id TEXT,
  payment_terms INTEGER DEFAULT 30,
  credit_limit DECIMAL(10,2),
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'inactive')),
  notes TEXT
);

-- Projects Table
CREATE TABLE IF NOT EXISTS projects (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  client_id UUID REFERENCES clients(id),
  name TEXT NOT NULL,
  code TEXT,
  description TEXT,
  type TEXT,
  status TEXT DEFAULT 'planning' CHECK (status IN ('planning', 'in_progress', 'on_hold', 'completed', 'cancelled')),
  priority TEXT DEFAULT 'medium' CHECK (priority IN ('low', 'medium', 'high', 'critical')),
  start_date DATE,
  end_date DATE,
  deadline DATE,
  budget DECIMAL(10,2),
  actual_cost DECIMAL(10,2),
  progress INTEGER DEFAULT 0,
  project_manager_id UUID,
  technologies TEXT[],
  repository_url TEXT,
  staging_url TEXT,
  production_url TEXT
);

-- Tasks Table (Projects Module)
CREATE TABLE IF NOT EXISTS tasks (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  project_id UUID REFERENCES projects(id),
  parent_task_id UUID,
  title TEXT NOT NULL,
  description TEXT,
  assigned_to UUID,
  status TEXT DEFAULT 'todo' CHECK (status IN ('todo', 'in_progress', 'review', 'completed')),
  priority TEXT DEFAULT 'medium' CHECK (priority IN ('low', 'medium', 'high', 'critical')),
  estimated_hours DECIMAL(5,2),
  actual_hours DECIMAL(5,2),
  start_date DATE,
  due_date DATE,
  completed_at TIMESTAMP WITH TIME ZONE,
  tags TEXT[]
);

-- Support Tickets Table
CREATE TABLE IF NOT EXISTS tickets (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  ticket_number TEXT UNIQUE,
  client_id UUID REFERENCES clients(id),
  project_id UUID REFERENCES projects(id),
  subject TEXT NOT NULL,
  description TEXT,
  category TEXT,
  priority TEXT DEFAULT 'medium' CHECK (priority IN ('low', 'medium', 'high', 'critical')),
  status TEXT DEFAULT 'open' CHECK (status IN ('open', 'in_progress', 'resolved', 'closed')),
  assigned_to UUID,
  sla_deadline TIMESTAMP WITH TIME ZONE,
  resolved_at TIMESTAMP WITH TIME ZONE,
  resolution TEXT,
  satisfaction_rating INTEGER
);

-- Suppliers Table (Retail Module)
CREATE TABLE IF NOT EXISTS suppliers (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  name TEXT NOT NULL,
  contact_person TEXT,
  email TEXT,
  phone TEXT,
  address TEXT,
  city TEXT,
  country TEXT,
  payment_terms INTEGER,
  tax_id TEXT,
  bank_details JSONB,
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'inactive')),
  notes TEXT
);

-- Sales Orders Table (Retail Module)
CREATE TABLE IF NOT EXISTS sales_orders (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  order_number TEXT UNIQUE,
  client_id UUID REFERENCES clients(id),
  order_date DATE DEFAULT CURRENT_DATE,
  delivery_date DATE,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'processing', 'shipped', 'delivered', 'cancelled')),
  subtotal DECIMAL(10,2),
  tax DECIMAL(10,2),
  discount DECIMAL(10,2),
  total DECIMAL(10,2),
  payment_status TEXT DEFAULT 'unpaid' CHECK (payment_status IN ('unpaid', 'partial', 'paid')),
  shipping_address TEXT,
  notes TEXT,
  created_by UUID
);

-- Invoices Table (Finance Module)
CREATE TABLE IF NOT EXISTS invoices (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  invoice_number TEXT UNIQUE,
  client_id UUID REFERENCES clients(id),
  student_id UUID REFERENCES students(id),
  invoice_date DATE DEFAULT CURRENT_DATE,
  due_date DATE,
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'sent', 'paid', 'overdue', 'cancelled')),
  subtotal DECIMAL(10,2),
  tax DECIMAL(10,2),
  discount DECIMAL(10,2),
  total DECIMAL(10,2),
  amount_paid DECIMAL(10,2) DEFAULT 0,
  balance_due DECIMAL(10,2),
  currency TEXT DEFAULT 'USD',
  notes TEXT,
  terms TEXT,
  reference_type TEXT,
  reference_id UUID,
  created_by UUID
);

-- Payments Table (Finance Module)
CREATE TABLE IF NOT EXISTS payments (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  payment_number TEXT UNIQUE,
  invoice_id UUID REFERENCES invoices(id),
  client_id UUID REFERENCES clients(id),
  student_id UUID REFERENCES students(id),
  amount DECIMAL(10,2) NOT NULL,
  currency TEXT DEFAULT 'USD',
  payment_method TEXT,
  payment_date DATE DEFAULT CURRENT_DATE,
  reference TEXT,
  status TEXT DEFAULT 'completed' CHECK (status IN ('pending', 'completed', 'failed', 'refunded')),
  notes TEXT,
  received_by UUID
);

-- Expenses Table (Finance Module)
CREATE TABLE IF NOT EXISTS expenses (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  expense_number TEXT UNIQUE,
  category TEXT,
  description TEXT NOT NULL,
  amount DECIMAL(10,2) NOT NULL,
  currency TEXT DEFAULT 'USD',
  expense_date DATE DEFAULT CURRENT_DATE,
  vendor TEXT,
  payment_method TEXT,
  receipt_url TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected', 'paid')),
  approved_by UUID,
  submitted_by UUID,
  project_id UUID REFERENCES projects(id),
  notes TEXT
);

-- Leads Table (CRM Module)
CREATE TABLE IF NOT EXISTS leads (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  source TEXT,
  first_name TEXT,
  last_name TEXT,
  email TEXT,
  phone TEXT,
  company TEXT,
  job_title TEXT,
  interest TEXT,
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'qualified', 'proposal', 'won', 'lost')),
  score INTEGER DEFAULT 0,
  assigned_to UUID,
  notes TEXT,
  converted_to_client_id UUID REFERENCES clients(id),
  converted_to_student_id UUID REFERENCES students(id),
  converted_at TIMESTAMP WITH TIME ZONE
);

-- Employees Table (HR Module)
CREATE TABLE IF NOT EXISTS employees (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  user_id UUID,
  employee_number TEXT UNIQUE,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT,
  phone TEXT,
  date_of_birth DATE,
  gender TEXT,
  national_id TEXT,
  address TEXT,
  city TEXT,
  country TEXT DEFAULT 'Zimbabwe',
  department TEXT,
  position TEXT,
  employment_type TEXT,
  hire_date DATE,
  contract_end_date DATE,
  salary DECIMAL(10,2),
  bank_name TEXT,
  bank_account TEXT,
  emergency_contact_name TEXT,
  emergency_contact_phone TEXT,
  photo_url TEXT,
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'inactive', 'on_leave', 'terminated'))
);

-- Leave Requests Table (HR Module)
CREATE TABLE IF NOT EXISTS leave_requests (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  employee_id UUID REFERENCES employees(id),
  leave_type TEXT NOT NULL,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  days INTEGER,
  reason TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  approved_by UUID,
  approved_at TIMESTAMP WITH TIME ZONE,
  notes TEXT
);

-- Payroll Table (HR Module)
CREATE TABLE IF NOT EXISTS payroll (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  employee_id UUID REFERENCES employees(id),
  pay_period TEXT,
  pay_period_start DATE,
  pay_period_end DATE,
  base_salary DECIMAL(10,2),
  allowances DECIMAL(10,2) DEFAULT 0,
  deductions DECIMAL(10,2) DEFAULT 0,
  tax DECIMAL(10,2) DEFAULT 0,
  net_salary DECIMAL(10,2),
  payment_date DATE,
  payment_method TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'processed', 'paid')),
  paid_at TIMESTAMP WITH TIME ZONE,
  notes TEXT
);

-- Attendance Table (HR Module)
CREATE TABLE IF NOT EXISTS attendance (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  employee_id UUID REFERENCES employees(id),
  date DATE NOT NULL,
  check_in TIME,
  check_out TIME,
  status TEXT DEFAULT 'present' CHECK (status IN ('present', 'absent', 'late', 'leave')),
  notes TEXT
);

-- =====================================================
-- STEP 5: Enable RLS and Policies for CIMS Tables
-- =====================================================

ALTER TABLE students ENABLE ROW LEVEL SECURITY;
ALTER TABLE courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE clients ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE tasks ENABLE ROW LEVEL SECURITY;
ALTER TABLE tickets ENABLE ROW LEVEL SECURITY;
ALTER TABLE suppliers ENABLE ROW LEVEL SECURITY;
ALTER TABLE sales_orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE invoices ENABLE ROW LEVEL SECURITY;
ALTER TABLE payments ENABLE ROW LEVEL SECURITY;
ALTER TABLE expenses ENABLE ROW LEVEL SECURITY;
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE employees ENABLE ROW LEVEL SECURITY;
ALTER TABLE leave_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE payroll ENABLE ROW LEVEL SECURITY;
ALTER TABLE attendance ENABLE ROW LEVEL SECURITY;

-- Service role has full access to all CIMS tables (for admin API)
CREATE POLICY "Service role full access" ON students FOR ALL USING (true);
CREATE POLICY "Service role full access" ON courses FOR ALL USING (true);
CREATE POLICY "Service role full access" ON clients FOR ALL USING (true);
CREATE POLICY "Service role full access" ON projects FOR ALL USING (true);
CREATE POLICY "Service role full access" ON tasks FOR ALL USING (true);
CREATE POLICY "Service role full access" ON tickets FOR ALL USING (true);
CREATE POLICY "Service role full access" ON suppliers FOR ALL USING (true);
CREATE POLICY "Service role full access" ON sales_orders FOR ALL USING (true);
CREATE POLICY "Service role full access" ON invoices FOR ALL USING (true);
CREATE POLICY "Service role full access" ON payments FOR ALL USING (true);
CREATE POLICY "Service role full access" ON expenses FOR ALL USING (true);
CREATE POLICY "Service role full access" ON leads FOR ALL USING (true);
CREATE POLICY "Service role full access" ON employees FOR ALL USING (true);
CREATE POLICY "Service role full access" ON leave_requests FOR ALL USING (true);
CREATE POLICY "Service role full access" ON payroll FOR ALL USING (true);
CREATE POLICY "Service role full access" ON attendance FOR ALL USING (true);

-- =====================================================
-- STEP 6: Create Indexes for CIMS Tables
-- =====================================================

CREATE INDEX IF NOT EXISTS idx_students_status ON students(status);
CREATE INDEX IF NOT EXISTS idx_students_email ON students(email);
CREATE INDEX IF NOT EXISTS idx_courses_category ON courses(category);
CREATE INDEX IF NOT EXISTS idx_clients_status ON clients(status);
CREATE INDEX IF NOT EXISTS idx_projects_status ON projects(status);
CREATE INDEX IF NOT EXISTS idx_projects_client ON projects(client_id);
CREATE INDEX IF NOT EXISTS idx_tasks_project ON tasks(project_id);
CREATE INDEX IF NOT EXISTS idx_tasks_status ON tasks(status);
CREATE INDEX IF NOT EXISTS idx_tickets_status ON tickets(status);
CREATE INDEX IF NOT EXISTS idx_invoices_status ON invoices(status);
CREATE INDEX IF NOT EXISTS idx_invoices_client ON invoices(client_id);
CREATE INDEX IF NOT EXISTS idx_payments_invoice ON payments(invoice_id);
CREATE INDEX IF NOT EXISTS idx_expenses_status ON expenses(status);
CREATE INDEX IF NOT EXISTS idx_leads_status ON leads(status);
CREATE INDEX IF NOT EXISTS idx_employees_status ON employees(status);
CREATE INDEX IF NOT EXISTS idx_leave_requests_employee ON leave_requests(employee_id);
CREATE INDEX IF NOT EXISTS idx_leave_requests_status ON leave_requests(status);
CREATE INDEX IF NOT EXISTS idx_payroll_employee ON payroll(employee_id);
CREATE INDEX IF NOT EXISTS idx_attendance_employee ON attendance(employee_id);
CREATE INDEX IF NOT EXISTS idx_attendance_date ON attendance(date);

-- =====================================================
-- Schema Complete for https://kubeadm.co.zw
-- =====================================================
