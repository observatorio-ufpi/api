SELECT tablename FROM pg_tables WHERE schemaname = 'public' AND tablename ILIKE '%compensacao%estado%' LIMIT 5;
