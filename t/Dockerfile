# DOCKER_NAME=ngcp-csc-ui-stretch
FROM docker.mgm.sipwise.com/sipwise-stretch:latest

# Important! Update this no-op ENV variable when this Dockerfile
# is updated with the current date. It will force refresh of all
# of the base images and things like `apt-get update` won't be using
# old cached versions when the Dockerfile is built.
ENV REFRESHED_AT 2017-12-15
ENV DEBIAN_FRONTEND noninteractive
ENV DISPLAY=:0

# files that get-code generates
COPY t/sources.list.d/builddeps.list /etc/apt/sources.list.d/
COPY t/sources.list.d/preferences /etc/apt/preferences.d/

RUN apt-get update && apt-get install --assume-yes \
    devscripts \
    firefox-esr \
    gtk2-engines-pixbuf \
    libgconf-2-4 \
    net-tools \
    nodejs \
    wget \
    xterm \
    xvfb

RUN wget -q https://deb.sipwise.com/files/google-chrome-stable_59.0.3071.115-1_amd64.deb
RUN dpkg --force-depends -i google-chrome-stable_59.0.3071.115-1_amd64.deb || true
RUN apt-get --assume-yes -f install

RUN echo "cd /code && ./t/testrunner" >/root/.bash_history

# we cannot use /code/ here otherwise it will be 'mounted over' with following 'docker run'
ADD package.json /tmp/
ADD npm-shrinkwrap.json /tmp/
ADD README.md /tmp/
WORKDIR /tmp
RUN npm install /tmp

WORKDIR /code

################################################################################
# Instructions for usage
# ----------------------
# When you want to build the base image from scratch
# (jump to the next section if you don't want to build yourself!):
#
# you need to put the proper NGCP sources at t/sources.list.d/builddeps.list
# for instance, trunk:
# echo "deb https://deb.sipwise.com/autobuild/ release-trunk-stretch main" > t/sources.list.d/builddeps.list
#
# NOTE: run the following command from root folder of git repository:
# % docker build --tag="ngcp-csc-ui-stretch" -f ./t/Dockerfile .
# % docker run --rm -i -t -v $(pwd):/code:ro ngcp-csc-ui-stretch:latest bash
#
# Use the existing docker image:
# % docker pull docker.mgm.sipwise.com/ngcp-csc-ui-stretch
# NOTE: run the following command from root folder of git repository:
# % docker run --rm -i -t -v $(pwd):/code:ro -v /results docker.mgm.sipwise.com/ngcp-csc-ui-stretch:latest bash
#
# Inside docker:
#   cd /code && ./t/testrunner
################################################################################
