document.addEventListener("DOMContentLoaded", function(event){

  import ("https://cdn.jsdeliver.net/npm/alpheios-embedded@latest/dist/alpheios-embedded.min.js")
  .then(embedLib => {

    window.AlpheiosEmbed.importDependencies({
      mode: 'cdn'
    })
    .then(Embedded => {

      new Embedded({
        clientId: "balmas.github.io/Mikrotata"
      }).activate();

  })
  .catch(e => {
      console.error('Import of Alpheios Embedded library failed: ${e}')
  })

  })
)
</script>
