import { Act, Process, Node,Value } from "@vhidvz/wfjs/common";
import { EventActivity } from "@vhidvz/wfjs/core";
import { parse, readFile, WorkflowJS } from '@vhidvz/wfjs';


@Process({ name: 'Naming Workflow' })

class namingWorkflow {
   
    @Value() name:string
    constructor(@Value() name:string) {
       this.name = name;
    }
    @Node({ name: 'start' })
    async start(@Act() activity: EventActivity, @Data() name: string) {
        if (name === "Ishaan") {
            activity.takeOutgoing();
        }
        else if (name === "Vivek") {
            activity.takeOutgoing();
        }
        else if (name === "Vivek Lal") {
            activity.takeOutgoing();
        }

    }

    @Node({ name: 'Send SMS' })
    async sendSMS(@Act() activity: EventActivity) {
        console.log('SMS: Sent SMS to Ishaan.');
        activity.takeOutgoing();
    }

    @Node({ name: 'Do Nothing' })
    async doNothing(@Act() activity: EventActivity) {
        console.log('No action taken for Vivek.');
        activity.takeOutgoing();
    }

    @Node({ name: 'Send Email' })
    async sendEmail(@Act() activity: EventActivity) {
        console.log('Email: Sent email to Vivek Lal.');
        activity.takeOutgoing();
    }
}

(async () => {
    const workflow = WorkflowJS.build();
    const { context } = await workflow.execute({
        factory: () => new namingWorkflow("Ishaan"),
        // Data:"Ishaan", //bpmn
    });

    console.debug('\nContext is:', JSON.stringify(context.serialize(), null, 2));
})();
