<center style='font-size:25px'>
    <b>Ad Ip Management frontend</b>
</center>

### **🔭Scope:**
<p>
Ad IP Management frontend interact between GUI to backend system.
</p>



## **Install application using docker:**
Make sure to have following dependencies installed <br>
	    - Docker (https://docs.docker.com/get-docker/) <br><br>



<b>Create docker external network to future connect if have already please avoid </b>

```bash
docker network create --subnet=10.10.10.0/24 --gateway=10.10.10.1 ad-common-network
```
<br><b>Git Clone / Download code</b>
```bash
git clone https://github.com/hasanalihaolader/ad-ip-frontend.git
```
<br><b>Go to downloaded folder and run following command into this folder</b>
```bash
 cp .env.example .env
 docker-compose build
```
<br><b>Get back project root folder and run</b>
```bash
 docker-compose up -d
```
<br><b>Check application info below</b>


### **🌱 Application info:**
```env
App_URL: http://localhost:4003/
```

### **🌱 Default user name password to login admin panel**
```env
username: rahibhasan689009@gmail.com
password: 12345678

```
