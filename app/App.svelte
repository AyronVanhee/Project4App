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
    import { alert } from 'tns-core-modules/ui/dialogs';
    import { connectionType, getConnectionType, startMonitoring, stopMonitoring }from "tns-core-modules/connectivity";


        let connectionTypeString;


    function GoAbout(){
        navigate({
            page: About
        })
    }


   
    const type=getConnectionType();

    switch (type) {
        case connectionType.none:
            console.log("No connection");
            connectionTypeString = "No Internet connectivity";
            break;
        case connectionType.wifi:
            console.log("WiFi connection");
            connectionTypeString = "WiFI connectivity";
            break;
        case connectionType.mobile:
            console.log("Mobile connection");
            connectionTypeString = "Mobile connectivity";
            break;
        case connectionType.ethernet:
            console.log("Ethernet connection");
            connectionTypeString = "Ethernet connectivity";
            break;
        case connectionType.bluetooth:
            console.log("Bluetooth connection");
            connectionTypeString = "Bluetooth connectivity";
            break;
        default:
            break;
    }


    console.log(connectionTypeString)

        alert({
            title: "Internet",
            message: 'Deze app is offline te gebruiken maar voor videos heb je internet nodig, internet status: ' + connectionTypeString,
            okButtonText: "Verder"
        }).then(() => {
            console.log("Alert dialog closed")
        })
    

</script>
