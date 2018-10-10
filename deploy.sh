hugo
ssh blog.ryanstreur.com "rm -r /srv/www/ryanstreur.com/public"
scp -r public blog.ryanstreur.com:/srv/www/ryanstreur.com
