<page xmlns="tns">
    <actionBar title="About" >
        <actionItem on:tap={GoHome}
        ios.systemIcon="16" ios.position="right"
        text="Home" android.position="popup"></actionItem>
    </actionBar>

    <stackLayout class="p-20" >
        <label class="c-title">About</label>
        <label textWrap="true" heigth="auto">
        Deze app is gemaakt om te kijken hoe ver de native kant staat van Svelte. Svelte Native is een nativescript framework die gebruik maakt van Svelte en NativeScript. Svelte Native is developed by leden van de Svelte community die graag apps willen developen a.d.h.v. Svelte. Dit project wordt dan ook niet officieel gesupport door Svelte of NativeScript. Maar het kan dat dit wel zal worden ondersteunt als er genoeg support is en ook al goed ontwikkelt is.
        </label>
        <label textWrap="true" heigth="auto">
        De bedoeling van deze app is om een basis versie te maken van de website waarbij ik ga kijken naar de native elementen. 
        </label>
        <!-- <stackLayout class="p-20">
            <image src="~/Images/logo.png"></image>
            <videoPlayer:video id="nativeVideoPlayer"
                    controls="true" loop="true" autoplay="false" height="280"
                    src="~/Images/film.mp4"></videoPlayer:video>
        </stackLayout> -->
    </stackLayout>

</page>

<script>
    import App from '../App.svelte';

    import { navigate } from 'svelte-native';
    import { Template } from 'svelte-native/components';
    import { Video } from 'nativescript-videoplayer';

    import { registerNativeViewElement } from 'svelte-native/dom'

    //const video = topmost().currentPage.getViewById('nativeVideoPlayer') as Video;
    // Setting event listeners on the Video
    // video.on(Video.pausedEvent, () => {
    // console.log('Video has been paused.');
    // });
    
    // video.on(Video.mutedEvent, () => {
    // console.log('Video has been muted.');
    // });
    
    // // changing the src
    // video.src = 'some video file or url';
    
    // // set loop
    // video.loop = false;
      
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