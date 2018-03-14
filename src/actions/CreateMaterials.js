/**
 * Created by zhouqihang on 2018/3/14.
 */

export const NUMBER_CHANGE = 'number_change';

export const onNumberChangeAction = ({ target }) => ({
    type: NUMBER_CHANGE,
    value: target.value,
});