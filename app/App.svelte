<page>
  <actionBar title="EiVi Cinema">

    <image class="c-logo" src="~/Images/logo.png" horizontalAlignment="left" />

  </actionBar>

  <bottomNavigation selectedIndex="0">

    <tabStrip backgroundColor="white">
      <tabStripItem height="auto" margin="0" padding="0">
        <label text="Home" />
      </tabStripItem>
      <tabStripItem>
        <label text="About" />
      </tabStripItem>
    </tabStrip>

    <tabContentItem>
      <stackLayout>
        <Home />
      </stackLayout>
    </tabContentItem>
    <tabContentItem>
      <gridLayout>
        <About />
      </gridLayout>
    </tabContentItem>
  </bottomNavigation>

</page>

<script>
  import About from "./Pages/About.svelte";
  import Home from "./Pages/Home.svelte";
  import Movie from "./Pages/Movie.svelte";

  import { navigate } from "svelte-native";
  import { Template } from "svelte-native/components";
</script>

