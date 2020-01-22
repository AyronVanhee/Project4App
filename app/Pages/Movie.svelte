<page>
  <actionBar title={movie.Name}>
    <image
      class="c-logo"
      src="~/Images/back.png"
      on:tap={goBack}
      horizontalAlignment="left" />

  </actionBar>

  <scrollView>
    <stackLayout backgroundColor="#4169e1">
      <stackLayout backgroundColor="white">
        <videoPlayer
          src={movie.Video}
          autoplay="true"
          VerticalAlignment="top"
          height="200"
          margin="8" />
      </stackLayout>
      <stackLayout class="p-20" backgrounColor="#4169e1">
        <label textWrap="true" heigth="auto" marginBottom="20px">
          {movie.Description}
        </label>
        <gridLayout columns="* ,*" rows="auto, auto">
          <label class="c-title" row="0" col="0">Genre:</label>
          <label row="1" col="0">{movie.Genre}</label>
          <label class="c-title" row="0" col="1">Jaar:</label>
          <label row="1" col="1">{movie.Year}</label>
        </gridLayout>

        <button class="c-button" on:tap={addTicket}>
          Een ticket bestellen
        </button>
      </stackLayout>
    </stackLayout>

  </scrollView>

</page>

<script>
  import About from "./About.svelte";
  import Home from "./Home.svelte";

  import { navigate } from "svelte-native";
  import { Template } from "svelte-native/components";
  import { goBack } from "svelte-native";
  import { confirm, alert } from "tns-core-modules/ui/dialogs";

  export let movie;

  function addTicket() {
    confirm({
      title: "Ticket kopen",
      message:
        "Ben je zeker dat je een ticket wil kopen voor " + movie.Name + "?",
      okButtonText: "Ja",
      cancelButtonText: "Nee"
    }).then(res => {
      console.log("de data");
      console.log(res);
      if (res == true) {
        alert({
          title: "Gekocht",
          message: "Je ticket is besteld",
          okButtonText: "Verder"
        }).then(() => {
          console.log("Alert dialog closed");
        });
      }
    });
  }
</script>

<style>
  .c-button {
    width: 100%;
    margin-top: 16px;
  }
</style>