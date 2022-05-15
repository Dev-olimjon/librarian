<script lang="ts">
   import axios from "axios"
</script>
<main> 
     <form class="card" action="http://localhost:9090/"method="post">
          <input name="useremail" type="email" placeholder="EMAIL..." class="input w-full max-w-xs" />
          <input name="userpassword" type="password" placeholder="PASSWORD..." class="input w-full max-w-xs" />
          <button type="submit" class="btn btn-outline btn-success">SIGN IN</button>
     </form>
</main>
<style>
main{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #414155;
     margin: 0;
     padding: 0;
}
input{
     width: 300px;
}

.card{
     display: flex;
     flex-direction: column;
     gap:25px;
     padding: 20px;
}
</style>