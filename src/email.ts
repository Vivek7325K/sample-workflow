import { Act, Process, Node, Value, Data } from "@vhidvz/wfjs/common";
import { EventActivity, GatewayActivity, TaskActivity } from "@vhidvz/wfjs/core";
import { parse, readFile, Context, WorkflowJS } from '@vhidvz/wfjs';


@Process({ name: 'Naming Workflow', path: '../src/input.bpmn' })

class namingWorkflow extends WorkflowJS {
    @Node({ name: 'Get Name' })
    async inputTask(
        @Value() value: string,
        @Data() data: { value: string },
        @Act() activity: EventActivity,) {
        console.log('data ', data);
        console.log('value ', value);

        data.value = value + ' ' + data.value;

        console.log('Get Task');
        activity.takeOutgoing();

        return 'getInput';
    }

    @Node({ id: 'Gateway_1y8m52q' })
    async isName(
        @Value() value: string,
        @Data() data: { value: string },
        @Act() activity: GatewayActivity,
    ) {
        console.log('data :', data);
        console.log('value :', value);
        if (value === "Ishaan") {
            activity.takeOutgoing({ name: 'Send Email' });
        } else if (value === "Vivek") {
            activity.takeOutgoing({ name: 'Do Nothing' });
        } else if (value === "Vivek Lal") {
            activity.takeOutgoing({ name: 'Send SMS' });
        } else {
            activity.takeOutgoing({ name: 'Send Invalid' });
        }

    }


    @Node({ name: 'Send SMS' })
    async sendSMS(
        @Value() value: string,
        @Data() data: { value: string },
        @Act() activity: EventActivity,) {
        console.log('data ', data);
        console.log('value ', value);

        data.value = value + ' ' + data.value;

        console.log('SMS: Sent SMS to Vivek Lal.');
        activity.takeOutgoing();
    }

    @Node({ name: 'Do Nothing' })
    async doNothing(@Value() value: string,
        @Data() data: { value: string },
        @Act() activity: EventActivity,) {
        console.log('data ', data);
        console.log('value ', value);

        data.value = value + ' ' + data.value;
        console.log('No action taken for Vivek.');
        activity.takeOutgoing();
    }

    @Node({ name: 'Send Email' })
    async sendEmail(@Value() value: string,
        @Data() data: { value: string },
        @Act() activity: EventActivity,) {
        console.log('data ', data);
        console.log('value ', value);

        data.value = value + ' ' + data.value;
        console.log('Email: Sent email to Ishaan.');
        activity.takeOutgoing();
    }

    @Node({ name: 'Send Invalid' })
    async sendInvalid(@Value() value: string,
        @Data() data: { value: string },
        @Act() activity: EventActivity,) {

        console.log('data ', data);
        console.log('value ', value);

        data.value = value + ' ' + data.value;
        console.log('Invalid data');
        activity.takeOutgoing();
    }

    @Node({ name: 'Message System End' })
    async messageSystemEnd(@Value() value: string,
        @Data() data: { value: string },
        @Act() activity: EventActivity,) {

        console.log('data ', data);
        console.log('value ', value);

        data.value = value + ' ' + data.value;
        console.log('Message System End');
        activity.takeOutgoing();
    }
}

(async () => {
    const workflow = namingWorkflow.build();
    const { context } = await workflow.execute({ data: { value: 'name' }, value: 'Ishaan' });

    const ctx = context.serialize();

    console.debug('\nContext is:', JSON.stringify(ctx, null, 2));

})();
