import { Act, Process, Node, Value, Data, Ctx, } from "@vhidvz/wfjs/common";
import { EventActivity, GatewayActivity, TaskActivity } from "@vhidvz/wfjs/core";
import { parse, readFile, Context, WorkflowJS, getBPMNProcess, Token } from '@vhidvz/wfjs';
import { BPMNProcess, BPMNSchema } from '@vhidvz/wfjs/type';

@Process({ name: 'End User', path: '../src/input(2).bpmn' })

class namingWorkflow extends WorkflowJS {
    @Node({ name: 'Get Name' })
    async inputTask(
        @Value() value: string,
        @Data() data: { value: string },
        @Act() activity: EventActivity,) {
        console.log('input data  ', data);
        console.log('input value ', value);
        activity.takeOutgoing();
        data.value = value + ' ' + data.value;
        return value;
    }

    @Node({ id: 'Gateway_1y8m52q' })
    async isName(
        @Value() value: string,
        @Data() data: { value: string },
        @Act() activity: GatewayActivity,
    ) {
        console.log('data in Exclusive Event-based Gateway:', data);
        console.log('value in Exclusive Event-based Gateway:', value);
        if (value === "Ishaan") {
        activity.takeOutgoing({ name: 'Send Email' });
        }  else if (value === "Vivek") {
            activity.takeOutgoing({ name: 'Do Nothing' });
        } else if (value === "Vivek Lal") {
            activity.takeOutgoing({ name: 'Send SMS' });
        } else {
            activity.takeOutgoing({ name: 'Send Invalid' });
        }
        data.value = value + ' ' + data.value;

    }


    @Node({ name: 'Send SMS' })
    async sendSMS(
        @Value() value: string,
        @Data() data: { value: string },
        @Act() activity: EventActivity,) {
        console.log('data in SMS ', data);
        console.log('value in SMS', value);

        data.value = value + ' ' + data.value;

        console.log('SMS: Sent SMS to Vivek Lal.');
        activity.takeOutgoing({ name: 'Message System End' });
    }

    @Node({ name: 'Do Nothing' })
    async doNothing(@Value() value: string,
        @Data() data: { value: string },
        @Act() activity: EventActivity,) {
        console.log('data in Do Nothing ', data);
        console.log('value in Do Nothing', value);

        data.value = value + ' ' + data.value;
        console.log('No action taken for Vivek.');
        activity.takeOutgoing({ name: 'Message System End' });
    }

    @Node({ name: 'Send Email' })
    async sendEmail(@Value() value: string,
        @Data() data: { value: string },
        @Act() activity: EventActivity,) {
        console.log('data in Send Email ', data);
        console.log('value in Send Email', value);

        data.value = value + ' ' + data.value;
        console.log('Email: Sent email to Ishaan.');
        activity.takeOutgoing({ name: 'Message System End' });
    }

    @Node({ name: 'Send Invalid' })
    async sendInvalid(@Value() value: string,
        @Data() data: { value: string },
        @Act() activity: EventActivity,) {

        console.log('data in Send Invalid', data);
        console.log('value in Send Invalid', value);

        data.value = value + ' ' + data.value;
        console.log('Invalid data');
        activity.takeOutgoing({ name: 'Message System End' });
    }

    @Node({ name: 'Message System End' })
    async messageSystemEnd(@Value() value: string,
        @Data() data: { value: string },
        @Act() activity: EventActivity,) {

        console.log('data in End', data);
        console.log('value in End', value);

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


// describe('test workflow engine class', () => {
//     const path = '../src/input(2).bpmn';

//     let xml: string;
//     let schema: BPMNSchema;

//     let process: BPMNProcess | undefined;

//     it('should return process', () => {
//         xml = readFile(path);

//         schema = parse(xml);
//         process = getBPMNProcess(schema['bpmn:definitions'], { id: 'Process_1igpwhg' });

//         expect(process).toBeDefined();
//     });

//     it('should return workflow by schema', async () => {
//         const workflow = WorkflowJS.build();

//         expect(workflow).toBeDefined();

//         const { context } = await workflow.execute({
//             factory: () => new endUser(),
//             schema: parse(xml)['bpmn:definitions'],
//         });

//         expect(context.isPaused()).toBeTruthy();
//     });

//     it('should return workflow by path', async () => {
//         const workflow = WorkflowJS.build();

//         expect(workflow).toBeDefined();

//         const { context } = await workflow.execute({
//             path,
//             handler: new endUser(),
//         });

//         expect(context.isPaused()).toBeTruthy();
//     });

//     it('should return workflow by context deserialized', async () => {
//         const workflow = WorkflowJS.build();

//         expect(workflow).toBeDefined();

//         const { context } = await workflow.execute({
//             path,
//             handler: new endUser(),
//         });

//         expect(context.isPaused()).toBeTruthy();

//         const ctx = context.serialize({ data: false, value: false });

//         expect(ctx).toBeDefined();

//         const exec = await WorkflowJS.build({ context: Context.deserialize(ctx) }).execute({
//             xml,
//             handler: new endUser(),
//             node: { id: 'Activity_1r8gmbw' },
//         });

//         expect(exec.context.isTerminated()).toBeTruthy();
//     });
// });

