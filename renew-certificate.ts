import { CommandLineProcessor } from "https://deno.land/x/commandline_processor/commandline-processor.ts"

const commandToBeExecuted = 'sudo certbot renew'


setInterval(async() => {
    console.log(await CommandLineProcessor.process(commandToBeExecuted))

}, 1000 * 60 * 60 * 24 * 50) // every 50 days