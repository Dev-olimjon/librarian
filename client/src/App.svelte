<script lang="ts">
 import Login from "./components/login.svelte";
 import {Router ,Route,Link} from "svelte-navigator"
</script>
<main>
	<Router>
    <Route path="/"><Login/></Route>
  </Router>
</main>

<style>

</style>