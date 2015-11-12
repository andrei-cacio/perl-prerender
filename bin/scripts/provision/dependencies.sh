echo "Updating ubuntu"
apt-get update
apt-get upgrade -y

echo "Installing CPANM"
curl -L https://cpanmin.us | perl - --sudo App::cpanminus

echo "Installing Perl Dependencies"
apt-get install phantomjs -y
apt-get install libxml-perl
apt-get install libexpat1-dev

cpanm Dancer2 --notest
cpanm WWW::Mechanize::PhantomJS --notest --force
cpanm YAML::XS --notest
cpanm Template --notest

#Nginx
apt-get install nginx -y
