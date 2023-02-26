upstream site2.moussaab.dev {
    server 127.0.0.1:1339;
    keepalive 64;
  }
  
  server {
    server_name site2.moussaab.dev;
    access_log /var/log/nginx/site2.moussaab.dev-access.log;
    error_log /var/log/nginx/site2.moussaab.dev-error.log;
    location / {
      proxy_set_header X-Real-IP $remote_addr;
      proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
      proxy_set_header X-Forwarded-Proto $scheme;
      proxy_set_header Host $http_host;
      proxy_set_header X-NginX-Proxy true;
      proxy_set_header Upgrade $http_upgrade;
      proxy_set_header Connection "upgrade";
      proxy_pass http://site2.moussaab.dev;
      proxy_redirect off;
      proxy_http_version 1.1;
      proxy_cache_bypass $http_upgrade;
    }
  }
  
  server {
  
    listen 80;
    server_name site2.moussaab.dev;
  
  }
  
  
  server {
    server_name site2.moussaab.dev;
      listen 80;
      return 404; 
  
  }