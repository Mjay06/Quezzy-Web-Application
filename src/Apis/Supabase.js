import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://ktqlemqasoggjccdmxfd.supabase.co'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt0cWxlbXFhc29nZ2pjY2RteGZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjMyMjU2MjcsImV4cCI6MjAzODgwMTYyN30.qpEawpddaxZvA1bpynBBHbns5ZMhAVhAtohXsddOHAc'
const supabase = createClient(supabaseUrl, supabaseKey)
export default supabase
