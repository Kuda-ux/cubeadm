-- CubeADM Database Schema for Supabase
-- Run this SQL in your Supabase SQL Editor (Dashboard > SQL Editor > New Query)

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Contacts Table (for contact form submissions)
CREATE TABLE IF NOT EXISTS contacts (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  message TEXT NOT NULL,
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
-- Drop existing policies first to avoid conflicts
DROP POLICY IF EXISTS "Allow anonymous inserts" ON contacts;
DROP POLICY IF EXISTS "Allow anonymous inserts" ON enrollments;
DROP POLICY IF EXISTS "Allow anonymous inserts" ON newsletter_subscribers;
DROP POLICY IF EXISTS "Allow anonymous inserts" ON quote_requests;

CREATE POLICY "Allow anonymous inserts" ON contacts FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow anonymous inserts" ON enrollments FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow anonymous inserts" ON newsletter_subscribers FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow anonymous inserts" ON quote_requests FOR INSERT WITH CHECK (true);

-- Products Table
CREATE TABLE IF NOT EXISTS products (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  name TEXT NOT NULL,
  category TEXT NOT NULL CHECK (category IN ('computing', 'networking', 'servers', 'cloud')),
  brand TEXT NOT NULL,
  description TEXT NOT NULL,
  image_url TEXT NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  rating DECIMAL(2,1) DEFAULT 4.5,
  in_stock BOOLEAN DEFAULT true,
  featured BOOLEAN DEFAULT false,
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

-- Orders Table
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

-- Insert sample products
INSERT INTO products (name, category, brand, description, image_url, price, rating, in_stock, featured) VALUES
-- Computing
('HP ProBook 450 G10', 'computing', 'HP', 'Business laptop with Intel Core i7, 16GB RAM, 512GB SSD', 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&q=80', 1299.00, 4.8, true, true),
('Dell OptiPlex 7010', 'computing', 'Dell', 'Desktop computer for enterprise, Intel Core i5, 8GB RAM', 'https://images.unsplash.com/photo-1593062096033-9a26b09da705?w=600&q=80', 899.00, 4.7, true, false),
('Lenovo ThinkPad X1 Carbon', 'computing', 'Lenovo', 'Ultra-thin business laptop, 14" display, Intel Core i7', 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=600&q=80', 1899.00, 4.9, true, true),
('Dell UltraSharp 27" Monitor', 'computing', 'Dell', '4K USB-C Hub Monitor, 27" IPS, 60Hz', 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600&q=80', 649.00, 4.8, true, false),
-- Networking
('Cisco Catalyst 9200 Switch', 'networking', 'Cisco', '24-port Gigabit Ethernet switch with PoE+', 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80', 2499.00, 4.9, true, true),
('Huawei S5735-L24T4S', 'networking', 'Huawei', '24-port Gigabit managed switch with 4 SFP+ ports', 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&q=80', 1899.00, 4.7, true, false),
('Cisco Meraki MR46', 'networking', 'Cisco', 'Cloud-managed Wi-Fi 6 access point', 'https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=600&q=80', 899.00, 4.8, true, true),
('Fortinet FortiGate 60F', 'networking', 'Fortinet', 'Next-gen firewall with SD-WAN capabilities', 'https://images.unsplash.com/photo-1563770660941-20978e870e26?w=600&q=80', 1299.00, 4.9, true, false),
-- Servers
('Dell PowerEdge R750', 'servers', 'Dell', '2U rack server, dual Intel Xeon, 64GB RAM', 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80', 8999.00, 4.9, true, true),
('HPE ProLiant DL380 Gen10', 'servers', 'HPE', '2U rack server with Intel Xeon Scalable processors', 'https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=600&q=80', 7499.00, 4.8, true, false),
('Synology DS1821+', 'servers', 'Synology', '8-bay NAS with AMD Ryzen, 4GB RAM expandable', 'https://images.unsplash.com/photo-1600267185393-e158a98703de?w=600&q=80', 1099.00, 4.8, true, true),
('Dell EMC PowerVault ME5', 'servers', 'Dell', 'Entry-level SAN storage array, 25 drive bays', 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80', 12999.00, 4.7, false, false),
-- Cloud
('VMware vSphere Standard', 'cloud', 'VMware', 'Virtualization platform license per processor', 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80', 1499.00, 4.9, true, true),
('Nutanix HCI Starter Pack', 'cloud', 'Nutanix', 'Hyper-converged infrastructure starter bundle', 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&q=80', 24999.00, 4.8, true, false),
('Microsoft Azure Stack HCI', 'cloud', 'Microsoft', 'Hybrid cloud solution with Azure integration', 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600&q=80', 19999.00, 4.7, true, true),
('Veeam Backup & Replication', 'cloud', 'Veeam', 'Enterprise backup solution for virtual environments', 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80', 2999.00, 4.9, true, false);
