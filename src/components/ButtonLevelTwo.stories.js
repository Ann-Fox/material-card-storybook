import ButtonLevelTwo from "@/components/ButtonLevelTwo.vue";

export default {
    title: "Level2/Button",
    component: ButtonLevelTwo
}

export const ButtonONE = {
    render: () => ({
        components: { ButtonLevelTwo },
        template: '<ButtonLevelTwo />',
    }),
};

export const WithProp = {
    render: () => ({
        components: { ButtonLevelTwo },
        template: '<ButtonLevelTwo prop="value"/>',
    }),
};
