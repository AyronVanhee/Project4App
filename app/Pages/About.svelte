<page xmlns="tns">
    <actionBar title="About" >
        <actionItem on:tap={GoHome}
        ios.systemIcon="16" ios.position="right"
        text="Home" android.position="popup"></actionItem>
    </actionBar>

<scrollView>
    <stackLayout class="p-20" >
        <label class="c-title">About</label>
        <label textWrap="true" heigth="auto">
        Deze app is gemaakt om te kijken hoe ver de native kant staat van Svelte. Svelte Native is een nativescript framework die gebruik maakt van Svelte en NativeScript. Svelte Native is developed by leden van de Svelte community die graag apps willen developen a.d.h.v. Svelte. Dit project wordt dan ook niet officieel gesupport door Svelte of NativeScript. Maar het kan dat dit wel zal worden ondersteunt als er genoeg support is en ook al goed ontwikkelt is.
        </label>
        <label textWrap="true" heigth="auto">
        De bedoeling van deze app is om een basis versie te maken van de website waarbij ik ga kijken naar de native elementen. 
        </label>
        <label textWrap="true" heigth="auto">
        Deze app is offline te gebruiken. Het enige dat gebruik maakt van internet zijn de trailer videos.
        </label>
        <label>
        Plugins:
        </label>
        <label>Video Player</label>
    </stackLayout>
</scrollView>
</page>

<script>
    import App from '../App.svelte';

    import { navigate } from 'svelte-native';
    import { Template } from 'svelte-native/components';
    import { Video } from 'nativescript-videoplayer';

    import { registerNativeViewElement } from 'svelte-native/dom'
      
    function GoHome(){
        navigate({
            page: App
        })
    }
</script>

<style>
.c-title{
    font-size:18px;
    font-weight: bold;
}


</style>