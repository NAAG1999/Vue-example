new Vue({
    el : '#vue-app', //keep this line in single inverted commas always 
    data: {
        name : 'Nilesh',
        message: 'Hello vue!',
        job : 'student',
        website: 'google.com',
        age:19
    },
    methods :{
        Add : function()
        {
            this.age++;
        },
        Subtract : function(){
            this.age--;
        },
        click :function()
        {
            alert("Dare you click me!!")
        }
    }
});