
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://duooyrnfjjnofoeokkru.supabase.co'
const supabaseKey ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR1b295cm5mampub2ZvZW9ra3J1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ0MzA5NDAsImV4cCI6MjA1MDAwNjk0MH0.9NfDCa80cNdMGVRmVPd3rohNgZIPphFLQTeEwLeWnR0"
const supabase = createClient(supabaseUrl, supabaseKey)


export default supabase
