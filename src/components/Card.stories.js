import Card from "./Card.vue";

export default {
    title: 'Card',
    component: Card,
    argTypes: {
        title: 'String',
        subText: 'String',
        supportingText: 'String',
        buttonText: 'String'
    }
};

const Template = (args) => ({
    components: { Card },
    setup() {
        return { args }
    },
    template: '<Card v-bind="args" />'
})
export const Primary = Template.bind({})
Primary.args = {
    title: 'Example title',
    subText: 'Secondary text'
}

export const Secondary = Template.bind({})
Secondary.args = {
    title: 'Example title',
    subText: 'Media text',
    mediaHref: 'favicon.ico'
}

export const Third = Template.bind({})
Third.args = {
    title: 'Third title',
    subText: 'Media Third text',
    mediaHref: 'placeholder.svg',
    supportingText: 'Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem'
}

export const Fourth = Template.bind({})
Fourth.args = {
    title: 'Fourth title',
    subText: 'Media Fourth text',
    mediaHref: 'placeholder.svg',
    supportingText: 'Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem',
    buttonText: 'go'
}
