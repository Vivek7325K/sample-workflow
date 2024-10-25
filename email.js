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
            console.log('data ', data);
            console.log('value ', value);
            data.value = value + ' ' + data.value;
            console.log('Get Task');
            activity.takeOutgoing();
            return 'getInput';
        });
    }
    isName(value, data, activity) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('data :', data);
            console.log('value :', value);
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
        });
    }
    sendSMS(value, data, activity) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('data ', data);
            console.log('value ', value);
            data.value = value + ' ' + data.value;
            console.log('SMS: Sent SMS to Vivek Lal.');
            activity.takeOutgoing();
        });
    }
    doNothing(value, data, activity) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('data ', data);
            console.log('value ', value);
            data.value = value + ' ' + data.value;
            console.log('No action taken for Vivek.');
            activity.takeOutgoing();
        });
    }
    sendEmail(value, data, activity) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('data ', data);
            console.log('value ', value);
            data.value = value + ' ' + data.value;
            console.log('Email: Sent email to Ishaan.');
            activity.takeOutgoing();
        });
    }
    sendInvalid(value, data, activity) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('data ', data);
            console.log('value ', value);
            data.value = value + ' ' + data.value;
            console.log('Invalid data');
            activity.takeOutgoing();
        });
    }
    messageSystemEnd(value, data, activity) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('data ', data);
            console.log('value ', value);
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
    (0, common_1.Process)({ name: 'Naming Workflow', path: './src/input.bpmn' })
], namingWorkflow);
(() => __awaiter(void 0, void 0, void 0, function* () {
    const workflow = namingWorkflow.build();
    const { context } = yield workflow.execute({ data: { value: 'name' }, value: 'Ishaan' });
    const ctx = context.serialize();
    console.debug('\nContext is:', JSON.stringify(ctx, null, 2));
}))();
//# sourceMappingURL=email.js.map