import Modes from "@/components/tf/Modes";
import {computed, reactive} from "vue";
import {io} from "socket.io-client";

const socket = io('https://' + location.host , {
    path: '/api/socket.io'
});

export const getTemplateById = (id) => {
    if (id === 1)
        return {
            1: {type: Modes.GREEN, sign: '5'},
            2: {type: Modes.RED},
            3: {type: Modes.GREEN, sign: '5'},
            4: {type: Modes.RED},
        }
    else if (id === 2) {
        return {
            1: {type: Modes.RED},
            2: {type: Modes.GREEN, sign: '5'},
            3: {type: Modes.RED},
            4: {type: Modes.GREEN, sign: '5'},
        }
    } else if (id === 3)
        return {
            1: {type: Modes.GREEN, sign: '3'},
            2: {type: Modes.RED},
            3: {type: Modes.GREEN, sign: '3'},
            4: {type: Modes.RED},
        }
    else if (id === 4) {
        return {
            1: {type: Modes.RED},
            2: {type: Modes.GREEN, sign: '3'},
            3: {type: Modes.RED},
            4: {type: Modes.GREEN, sign: '3'},
        }
    } else return {}
}

export const store = reactive({
    template: 0
})

export const activeTemplate = computed(() => {
    return getTemplateById(store.template)
})

export function setActiveTemplate(val) {
    store.template = val

    socket.emit('setTemplate', {templateId: val})
}

export const getInstructions = computed(() => {
    return {
        1: [
            {type: Modes.RED, time: 5000},
            {type: Modes.YELLOW, time: 2000},
            {type: Modes.GREEN, time: 5000},
            {type: Modes.YELLOW, time: 2000},
        ],
        2: [
            {type: Modes.GREEN, time: 5000},
            {type: Modes.YELLOW, time: 2000},
            {type: Modes.RED, time: 5000},
            {type: Modes.YELLOW, time: 2000},
        ],
        3: [
            {type: Modes.RED, time: 5000},
            {type: Modes.YELLOW, time: 2000},
            {type: Modes.GREEN, time: 5000},
            {type: Modes.YELLOW, time: 2000},
        ],
        4: [
            {type: Modes.GREEN, time: 5000},
            {type: Modes.YELLOW, time: 2000},
            {type: Modes.RED, time: 5000},
            {type: Modes.YELLOW, time: 2000},
        ]
    }
})

export const getForce = computed(() => {
    return store.template > 0 ? getTemplateById(store.template) : {1: null, 2: null}
});

socket.on('template', (id) => {
    store.template = parseInt(id)
})