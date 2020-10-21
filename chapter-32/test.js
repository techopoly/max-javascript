function a1(name){
    o1.showName()
    console.log(name);
}

const o1 = {
    name : 'ishmam',
    showName: function(){
        console.log(this.name)
    }
}

a1('tasin');

