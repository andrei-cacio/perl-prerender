# Config
cp /vagrant/config/.bash_profile /home/vagrant/.bash_profile

# Upgrading nodejs
echo "Upgrading Nodejs"

## Install NVM
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.29.0/install.sh | bash

## Export NVM for the current session
export NVM_DIR="/home/vagrant/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"  # This loads nvm

## Install nodejs 0.12
nvm install 0.12
npm install webpack -g

echo "Building client app"
cd /vagrant/lib/client
npm install