time (hugo
ssh ryanstreur.com "rm -r ~/blog/public"
rsync -av public/ ryanstreur.com:~/blog/public)
