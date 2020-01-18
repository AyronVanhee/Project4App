<page>
    <actionBar title="EiVi Cinema" >

        <image class="c-logo" src="~/Images/logo.png" horizontalAlignment="left"></image>

        <actionItem on:tap={GoAbout}
        ios.systemIcon="16" ios.position="right"
        text="About" android.position="popup"></actionItem>
    </actionBar>



    <bottomNavigation selectedIndex="0">

    <tabStrip backgroundColor="white">
        <tabStripItem height="auto" margin="0" padding="0">
            <label text="Home"></label>

            <Home />
        </tabStripItem>
        <tabStripItem >
            <label text="About"></label>
        </tabStripItem>
        <tabStripItem >
            <label text="Nog iets"></label>
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
    <tabContentItem>
        <gridLayout>
            <label text="Hier komt nog iets" class="h2 text-center"></label>
        </gridLayout>
    </tabContentItem>
</bottomNavigation>

</page>

<script>
    import About from './Pages/About.svelte';
    import Home from './Pages/Home.svelte';
    import Movie from './Pages/Movie.svelte';

    import { navigate } from 'svelte-native';
    import { Template } from 'svelte-native/components';
      

    function GoAbout(){
        navigate({
            page: About
        })
    }

    

</script>
