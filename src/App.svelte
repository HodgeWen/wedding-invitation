<script lang="ts">
  import Envelope from './components/envelope.svelte'
  import Invitation from './components/invitation.svelte'
  import { invitationOpened } from './store'
</script>

<main>
  {#if $invitationOpened}
    <Invitation />
  {:else}
    <Envelope />
  {/if}
</main>
