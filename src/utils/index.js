


function sortByName(clientList) {
	let clientsNames = []
    clientList.forEach(client => {
        clientsNames.push(client.name)    
    })
    
    const clientNames = clientsNames.sort()
    let listOFCLient = []
    clientNames.forEach(client => {
        clientList.forEach(clientName => {
                if(client === clientName.name){
                    listOFCLient.push(clientName)
                }    
            })
    })


	return listOFCLient
    }

function sortByCountry(clientList) {
    let clientsNames = []
        clientList.forEach(client => {
            clientsNames.push(client.country)    
        })
        
        let clientNames = clientsNames.reduce((unico, item) => {
            return unico.includes(item) ? unico : [...unico, item]
        }, []);
        clientNames = clientNames.sort()
        let listOFCLient = []
        clientNames.forEach(client => {
            clientList.forEach(clientName => {
                    if(client === clientName.country){
                        listOFCLient.push(clientName)
                    }    
                })
        })
    
    
        return listOFCLient
        }

function sortByDepartament(clientList) {
    let clientsNames = []
    clientList.forEach(client => {
        clientsNames.push(client.department)    
    })
    
    let clientNames = clientsNames.reduce((unico, item) => {
        return unico.includes(item) ? unico : [...unico, item]
    }, []);
    
    clientNames = clientNames.sort()
    let listOFCLient = []
    
    clientNames.forEach(client => {
        clientList.forEach(clientName => {
            if(client === clientName.department){
                listOFCLient.push(clientName)
            }    
        })
    })
    
    console.log(listOFCLient)

    return listOFCLient
    }

function sortByAdmition(clientList) {
    let clientsNames = []
    clientList.forEach(client => {
        clientsNames.push(client.admissionDate)    
    })     
    let clientNames = clientsNames.reduce((unico, item) => {
        return unico.includes(item) ? unico : [...unico, item]
    }, []);    
    clientNames = clientNames.sort()
    let listOFCLient = []

    clientNames.forEach(client => {
        clientList.forEach(clientName => {
            if(client === clientName.admissionDate){
                listOFCLient.push(clientName)
                }    
            })
        })
        
        console.log(listOFCLient)
    
        return listOFCLient
    }
        

export {
    sortByName,
    sortByCountry,
    sortByDepartament,
    sortByAdmition
};