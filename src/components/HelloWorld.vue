<template>
  <div class="hello">
    <h1>{{list}}</h1>
  </div>
</template>

<script>
import service from "../service/service";
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return{
      list:[]
    }
  },
  methods:{
    getList(){
       var options = {
        data: {},
      };
      service.getUsers(
        options,
        (res) => {
          console.log(res)
          this.list = res.data;
        },
        (err) => {
          console.log(err.response);
          
        }
      );
    },
    
  },
  created(){
    this.getList();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
