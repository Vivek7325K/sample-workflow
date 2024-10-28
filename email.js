"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@vhidvz/wfjs/common");
const core_1 = require("@vhidvz/wfjs/core");
const wfjs_1 = require("@vhidvz/wfjs");
let namingWorkflow = class namingWorkflow extends wfjs_1.WorkflowJS {
    inputTask(value, data, activity) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('input data  ', data);
            console.log('input value ', value);
            activity.takeOutgoing();
            data.value = value + ' ' + data.value;
            return value;
        });
    }
    isName(value, data, activity) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('data in Exclusive Event-based Gateway:', data);
            console.log('value in Exclusive Event-based Gateway:', value);
            if (value === "Ishaan") {
                activity.takeOutgoing({ name: 'Send Email' });
            }
            else if (value === "Vivek") {
                activity.takeOutgoing({ name: 'Do Nothing' });
            }
            else if (value === "Vivek Lal") {
                activity.takeOutgoing({ name: 'Send SMS' });
            }
            else {
                activity.takeOutgoing({ name: 'Send Invalid' });
            }
            data.value = value + ' ' + data.value;
        });
    }
    sendSMS(value, data, activity) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('data in SMS ', data);
            console.log('value in SMS', value);
            data.value = value + ' ' + data.value;
            console.log('SMS: Sent SMS to Vivek Lal.');
            activity.takeOutgoing({ name: 'Message System End' });
        });
    }
    doNothing(value, data, activity) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('data in Do Nothing ', data);
            console.log('value in Do Nothing', value);
            data.value = value + ' ' + data.value;
            console.log('No action taken for Vivek.');
            activity.takeOutgoing({ name: 'Message System End' });
        });
    }
    sendEmail(value, data, activity) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('data in Send Email ', data);
            console.log('value in Send Email', value);
            data.value = value + ' ' + data.value;
            console.log('Email: Sent email to Ishaan.');
            activity.takeOutgoing({ name: 'Message System End' });
        });
    }
    sendInvalid(value, data, activity) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('data in Send Invalid', data);
            console.log('value in Send Invalid', value);
            data.value = value + ' ' + data.value;
            console.log('Invalid data');
            activity.takeOutgoing({ name: 'Message System End' });
        });
    }
    messageSystemEnd(value, data, activity) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('data in End', data);
            console.log('value in End', value);
            data.value = value + ' ' + data.value;
            console.log('Message System End');
            activity.takeOutgoing();
        });
    }
};
__decorate([
    (0, common_1.Node)({ name: 'Get Name' }),
    __param(0, (0, common_1.Value)()),
    __param(1, (0, common_1.Data)()),
    __param(2, (0, common_1.Act)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, core_1.EventActivity]),
    __metadata("design:returntype", Promise)
], namingWorkflow.prototype, "inputTask", null);
__decorate([
    (0, common_1.Node)({ id: 'Gateway_1y8m52q' }),
    __param(0, (0, common_1.Value)()),
    __param(1, (0, common_1.Data)()),
    __param(2, (0, common_1.Act)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, core_1.GatewayActivity]),
    __metadata("design:returntype", Promise)
], namingWorkflow.prototype, "isName", null);
__decorate([
    (0, common_1.Node)({ name: 'Send SMS' }),
    __param(0, (0, common_1.Value)()),
    __param(1, (0, common_1.Data)()),
    __param(2, (0, common_1.Act)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, core_1.EventActivity]),
    __metadata("design:returntype", Promise)
], namingWorkflow.prototype, "sendSMS", null);
__decorate([
    (0, common_1.Node)({ name: 'Do Nothing' }),
    __param(0, (0, common_1.Value)()),
    __param(1, (0, common_1.Data)()),
    __param(2, (0, common_1.Act)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, core_1.EventActivity]),
    __metadata("design:returntype", Promise)
], namingWorkflow.prototype, "doNothing", null);
__decorate([
    (0, common_1.Node)({ name: 'Send Email' }),
    __param(0, (0, common_1.Value)()),
    __param(1, (0, common_1.Data)()),
    __param(2, (0, common_1.Act)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, core_1.EventActivity]),
    __metadata("design:returntype", Promise)
], namingWorkflow.prototype, "sendEmail", null);
__decorate([
    (0, common_1.Node)({ name: 'Send Invalid' }),
    __param(0, (0, common_1.Value)()),
    __param(1, (0, common_1.Data)()),
    __param(2, (0, common_1.Act)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, core_1.EventActivity]),
    __metadata("design:returntype", Promise)
], namingWorkflow.prototype, "sendInvalid", null);
__decorate([
    (0, common_1.Node)({ name: 'Message System End' }),
    __param(0, (0, common_1.Value)()),
    __param(1, (0, common_1.Data)()),
    __param(2, (0, common_1.Act)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, core_1.EventActivity]),
    __metadata("design:returntype", Promise)
], namingWorkflow.prototype, "messageSystemEnd", null);
namingWorkflow = __decorate([
    (0, common_1.Process)({ name: 'End User', path: './src/input(2).bpmn' })
], namingWorkflow);
(() => __awaiter(void 0, void 0, void 0, function* () {
    const workflow = namingWorkflow.build();
    const { context } = yield workflow.execute({ data: { value: 'name' }, value: 'Ishaan' });
    const ctx = context.serialize();
    console.debug('\nContext is:', JSON.stringify(ctx, null, 2));
}))();
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
//# sourceMappingURL=email.js.map