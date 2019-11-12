module.exports = function(RED) {

    /*=======================================================================================
      ========================================= CPU =========================================
      =======================================================================================*/

    function CPU(config) {
        RED.nodes.createNode(this,config);        
        var node = this;
        if(config.prefix == "1") {
        node.on('input', function(msg) {
            const si = require('systeminformation');
            si.cpu()
            .then(cpus => {
                msg.payload = cpus;
                node.send(msg);
           })
            .catch(error => console.error(error)); 
        });
    } else if (config.prefix == "2") {
        node.on('input', function(msg) {
            const si = require('systeminformation');
            si.cpuFlags()
            .then(flags => {
                msg.payload = flags;
                node.send(msg);
           })
            .catch(error => console.error(error));
        });
    } else if (config.prefix == "3") {
        node.on('input', function(msg) {
            const si = require('systeminformation');
            si.cpuCache()
            .then(cache => {
                msg.payload = cache;
                node.send(msg);
           })
            .catch(error => console.error(error)); 
        });
    } else if (config.prefix == "4") {
        node.on('input', function(msg) {
            const si = require('systeminformation');
            si.cpuCurrentspeed()
            .then(speed => {
                msg.payload = speed;
                node.send(msg);
           })
            .catch(error => console.error(error));
        });
    } else if (config.prefix == "5") {
        node.on('input', function(msg) {
            const si = require('systeminformation');
            si.cpuTemperature()
            .then(speed => {
                msg.payload = speed;
                node.send(msg);
           })
            .catch(error => console.error(error));
        });
    }
    }
    RED.nodes.registerType("CPU",CPU);

    /*=======================================================================================
      ===================================== SYSTEMM =========================================
      =======================================================================================*/

    function SYSTEM(config) {
        RED.nodes.createNode(this,config);        
        var node = this;
        node.on('input', function(msg) {
            const si = require('systeminformation');
            si.system()
            .then(sys => {
                msg.payload = sys;
                node.send(msg);
           })
            .catch(error => console.error(error)); 
        });
        node.on('input', function(msg) {
            const si = require('systeminformation');
            si.bios()
            .then(bios => {
                msg.payload = bios;
                node.send(msg);
           })
            .catch(error => console.error(error));
        });
        node.on('input', function(msg) {
            const si = require('systeminformation');
            si.baseboard()
            .then(board => {
                msg.payload = board;
                node.send(msg);
           })
            .catch(error => console.error(error)); 
        });
        node.on('input', function(msg) {
            const si = require('systeminformation');
            si.chassis()
            .then(cha => {
                msg.payload = cha;
                node.send(msg);
           })
            .catch(error => console.error(error));
        });
    }    
    RED.nodes.registerType("SYSTEM",SYSTEM);

    /*=======================================================================================
      ======================================= GENERAL =======================================
      =======================================================================================*/

    function GENERAL(config) {
        RED.nodes.createNode(this,config);        
        var node = this;
        node.on('input', function(msg) {
            const si = require('systeminformation');
            si.version()
            .then(ver => {
                msg.payload = ver;
                node.send(msg);
           })
            .catch(error => console.error(error)); 
        });
        node.on('input', function(msg) {
            const si = require('systeminformation');
            si.time()
            .then(time => {
                msg.payload = time;
                node.send(msg);
           })
            .catch(error => console.error(error));
        });
        node.on('input', function(msg) {
            const si = require('systeminformation');
            si.getStaticData()
            .then(data => {
                msg.payload = data;
                node.send(msg);
           })
            .catch(error => console.error(error)); 
        });
        node.on('input', function(msg) {
            const si = require('systeminformation');
            si.chassis()
            .then(cha => {
                msg.payload = cha;
                node.send(msg);
           })
            .catch(error => console.error(error));
        });
    }    
    RED.nodes.registerType("GENERAL",GENERAL);

    /*=======================================================================================
      ====================================== MEMORIA ========================================
      =======================================================================================*/

    function MEMORIA(config) {
        RED.nodes.createNode(this,config);        
        var node = this;
        node.on('input', function(msg) {
            const si = require('systeminformation');
            si.mem()
            .then(ram => {
                msg.payload = ram;
                node.send(msg);
           })
            .catch(error => console.error(error)); 
        });
        node.on('input', function(msg) {
            const si = require('systeminformation');
            si.memLayout()
            .then(lay => {
                msg.payload = lay;
                node.send(msg);
           })
            .catch(error => console.error(error));
        });
    }    
    RED.nodes.registerType("MEMORIA",MEMORIA);

    /*=======================================================================================
      ======================================= BATERIA =======================================
      =======================================================================================*/

    function BATERIA(config) {
        RED.nodes.createNode(this,config);        
        var node = this;
        node.on('input', function(msg) {
            const si = require('systeminformation');
            si.battery()
            .then(bat => {
                msg.payload = bat;
                node.send(msg);
           })
            .catch(error => console.error(error)); 
        });
    }    
    RED.nodes.registerType("BATERIA",BATERIA);

    /*=======================================================================================
      ========================================= DISPLAY =====================================
      =======================================================================================*/

    function DISPLAY(config) {
        RED.nodes.createNode(this,config);        
        var node = this;
        node.on('input', function(msg) {
            const si = require('systeminformation');
            si.graphics()
            .then(gra => {
                msg.payload = gra;
                node.send(msg);
           })
            .catch(error => console.error(error)); 
        });
    }    
    RED.nodes.registerType("DISPLAY",DISPLAY);

    /*=======================================================================================
      =================================== SO ================================================
      =======================================================================================*/

    function SO(config) {
        RED.nodes.createNode(this,config);        
        var node = this;
        node.on('input', function(msg) {
            const si = require('systeminformation');
            si.osInfo()
            .then(os => {
                msg.payload = os;
                node.send(msg);
           })
            .catch(error => console.error(error)); 
        });
        node.on('input', function(msg) {
            const si = require('systeminformation');
            si.uuid()
            .then(id => {
                msg.payload = id;
                node.send(msg);
           })
            .catch(error => console.error(error));
        });
        node.on('input', function(msg) {
            const si = require('systeminformation');
            si.shell()
            .then(she => {
                msg.payload = she;
                node.send(msg);
           })
            .catch(error => console.error(error)); 
        });
        node.on('input', function(msg) {
            const si = require('systeminformation');
            si.versions()
            .then(ver => {
                msg.payload = ver;
                node.send(msg);
           })
            .catch(error => console.error(error));
        });
        node.on('input', function(msg) {
            const si = require('systeminformation');
            si.users()
            .then(use => {
                msg.payload = use;
                node.send(msg);
           })
            .catch(error => console.error(error));
        });
    }    
    RED.nodes.registerType("SO",SO);

    /*=======================================================================================
      =================================== PROCESSOS DO SO ===================================
      =======================================================================================*/

    function ProcessesNode(config) {

        RED.nodes.createNode(this,config);        
        var node = this;

        node.on('input', function(msg) {
            
            const si = require('systeminformation');
            si.processes()
            .then(datap => {
                msg.payload = datap;
                node.send(msg);
           })
            .catch(error => console.error(error));
            
        });
        node.on('input', function(msg) {
            
            const si = require('systeminformation');
            si.fullLoad()
            .then(data3 => {
                msg.payload = data3;
                node.send(msg);
           })
            .catch(error => console.error(error));
            
        });
        node.on('input', function(msg) {
            
            const si = require('systeminformation');
            si.currentLoad()
            .then(data4 => {
                msg.payload = data4;
                node.send(msg);
           })
            .catch(error => console.error(error));
            
        });

    }

    RED.nodes.registerType("Processes",ProcessesNode);

    /*=======================================================================================
      =================================== DISK AND FILE SYSTEMS =============================
      =======================================================================================*/

    function DiskNode(config) {

        RED.nodes.createNode(this,config);        
        var node = this;

        node.on('input', function(msg) {
            
            const si = require('systeminformation');
            si.diskLayout()
            .then(data5 => {
                msg.payload = data5;
                node.send(msg);
           })
            .catch(error => console.error(error));
            
        });
        node.on('input', function(msg) {
            
            const si = require('systeminformation');
            si.blockDevices()
            .then(data6 => {
                msg.payload = data6;
                node.send(msg);
           })
            .catch(error => console.error(error));
            
        });
        node.on('input', function(msg) {
            
            const si = require('systeminformation');
            si.disksIO()
            .then(data7 => {
                msg.payload = data7;
                node.send(msg);
           })
            .catch(error => console.error(error));
            
        });

    }
    RED.nodes.registerType("Disk and FS",DiskNode);

    /*=======================================================================================
      =================================== FILE NODE =========================================
      =======================================================================================*/

    function FileNode(config) {

        RED.nodes.createNode(this,config);        
        var node = this;

        node.on('input', function(msg) {
            
            const si = require('systeminformation');
            si.fsSize()
            .then(data8 => {
                msg.payload = data8;
                node.send(msg);
           })
            .catch(error => console.error(error));
            
        });
        node.on('input', function(msg) {
            
            const si = require('systeminformation');
            si.fsOpenFiles()
            .then(data9 => {
                msg.payload = data9;
                node.send(msg);
           })
            .catch(error => console.error(error));
            
        });
        node.on('input', function(msg) {
            
            const si = require('systeminformation');
            si.fsStats()
            .then(data10 => {
                msg.payload = data10;
                node.send(msg);
           })
            .catch(error => console.error(error));
            
        });

    }

    RED.nodes.registerType("File System",FileNode);

    /*=======================================================================================
      =================================== NETWORK ===========================================
      =======================================================================================*/

    function NetworkNode(config) {

        RED.nodes.createNode(this,config);        
        var node = this;

        node.on('input', function(msg) {
            
            const si = require('systeminformation');
            si.networkInterfaces()
            .then(datanet => {
                msg.payload = datanet;
                node.send(msg);
           })
            .catch(error => console.error(error));
            
        });
        node.on('input', function(msg) {
            
            const si = require('systeminformation');
            si.networkInterfaceDefault()
            .then(datanet1 => {
                msg.payload = datanet1;
                node.send(msg);
           })
            .catch(error => console.error(error));
            
        });
        node.on('input', function(msg) {
            
            const si = require('systeminformation');
            si.networkConnections()
            .then(datanet2 => {
                msg.payload = datanet2;
                node.send(msg);
           })
            .catch(error => console.error(error));
            
        });

    }

    RED.nodes.registerType("Network",NetworkNode);

    /*=======================================================================================
      ========================================== WIFI =======================================
      =======================================================================================*/

    function WifiNode(config) {

        RED.nodes.createNode(this,config);        
        var node = this;

        node.on('input', function(msg) {
            
            const si = require('systeminformation');
            si.wifiNetworks()
            .then(dataw => {
                msg.payload = dataw;
                node.send(msg);
           })
            .catch(error => console.error(error));
            
        });

    }

    RED.nodes.registerType("Wifi",WifiNode);

    /*=======================================================================================
      ====================================== DOCKER =========================================
      =======================================================================================*/

    function DockerNode(config) {

        RED.nodes.createNode(this,config);        
        var node = this;

        node.on('input', function(msg) {
            
            const si = require('systeminformation');
            si.dockerAll()
            .then(datado => {
                msg.payload = datado;
                node.send(msg);
           })
            .catch(error => console.error(error));
            
        });

    }

    RED.nodes.registerType("Docker",DockerNode);

    /*=======================================================================================
      ====================================== Virtual Box ====================================
      =======================================================================================*/

    function VirtualBoxNode(config) {

        RED.nodes.createNode(this,config);        
        var node = this;

        node.on('input', function(msg) {
            
            const si = require('systeminformation');
            si.VirtualBoxNode()
            .then(datavb => {
                msg.payload = datavb;
                node.send(msg);
           })
            .catch(error => console.error(error));
            
        });

    }

    RED.nodes.registerType("Virtual Box",VirtualBoxNode);

}