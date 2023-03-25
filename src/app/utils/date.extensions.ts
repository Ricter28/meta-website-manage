export { };
import * as moment from 'moment';

declare global {
    interface Date {
        specifyUTCKind: () => Date;
        specifyLocalKind: () => Date;
        getDiffDaysFromNow: () => number;
    }
}

Date.prototype.specifyUTCKind = function (): Date {
    return new Date(Date.UTC(this.getFullYear(), this.getMonth(), this.getDate()));
};

Date.prototype.specifyLocalKind = function (): Date {
    return new Date(this.getFullYear(), this.getMonth(), this.getDate());
};

Date.prototype.getDiffDaysFromNow = function (): number {
    return moment().diff(moment(this), 'days');
};
