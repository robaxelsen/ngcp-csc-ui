<template>
    <csc-page :title="$t('pages.conversations.title')">
        <csc-conversations :conversations="conversations"></csc-conversation>
    </csc-page>
</template>

<script>
    import CscPage from '../CscPage'
    import CscConversations from '../CscConversations'
    export default {
        data () {
            return {
            }
        },
        components: {
            CscPage,
            CscConversations
        },
        computed: {
            conversations() {
                return this.$store.state.conversations.conversations;
            }
        }
    }
</script>

<style lang="stylus">
@import '~variables'
.q-infinite-scroll-message
    margin-bottom 50px
</style>
