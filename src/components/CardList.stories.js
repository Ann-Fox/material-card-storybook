import CardList from "./CardList.vue";

export default {
    title: 'List/CardList',
    component: CardList,
    // argTypes: {
    //     title: 'String',
    //     subText: 'String',
    //     supportingText: 'String',
    //     buttonText: 'String'
    // }
};

 export const ListStory = {
    render: (args) => ({
        components: { CardList },
        setup() {
            return { args };
        },
        argTypes: {
            variant: {
                options: ['primary', 'secondary'],
                control: { type: 'radio' },
            },
        },
        template: '<CardList v-bind="args" />',
    }),
    args: {
        cards: [
            { id: 1, title: 'Example title', subText: 'Подпись 1', mediaHref: 'placeholder.svg' },
            { id: 2, title: 'Example title', subText: 'Подпись 2', supportingText: 'Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem' },
            { id: 3, title: 'Example title', subText: 'Подпись 3', buttonText: 'go' },
            { id: 4, title: 'Example title', subText: 'Подпись 4', mediaHref: 'favicon.ico' },
            { id: 5, title: 'Example title', subText: 'Подпись 5' },
            { id: 6, title: 'Example title', subText: 'Подпись 6' },
            { id: 7, title: 'Example title', subText: 'Подпись 7' },
            { id: 8, title: 'Example title', subText: 'Подпись 8' },
            { id: 9, title: 'Example title', subText: 'Подпись 9' },

        ]
    },
};

// export const Primary = Template.bind({})
// Primary.args = {
//     title: 'Example title',
//     subText: 'Secondary text'
// }

// export const Secondary = Template.bind({})
// Secondary.args = {
//     title: 'Example title',
//     subText: 'Media text',
//     mediaHref: 'favicon.ico'
// }

// export const Third = ListStory.bind({})
// Third.args = {
//     // title: 'Third title',
//     // subText: 'Media Third text',
//     // mediaHref: 'placeholder.svg',
//     // supportingText: 'Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem'
// cards: [
//     { id: 1, title: 'Карточка 1', subText: 'Подпись 1' },
//     { id: 2, title: 'Карточка 2', subText: 'Подпись 2' },
//     { id: 3, title: 'Карточка 3', subText: 'Подпись 3' },
//     { id: 4, title: 'Карточка 4', subText: 'Подпись 4' },
//     { id: 5, title: 'Карточка 5', subText: 'Подпись 5' },
//     { id: 6, title: 'Карточка 6', subText: 'Подпись 6' },
//     { id: 7, title: 'Карточка 7', subText: 'Подпись 7' },
// ]
// }

// export const Fourth = Template.bind({})
// Fourth.args = {
//     title: 'Fourth title',
//     subText: 'Media Fourth text',
//     mediaHref: 'placeholder.svg',
//     supportingText: 'Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem',
//     buttonText: 'go'
// }
