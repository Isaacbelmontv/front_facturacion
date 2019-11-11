
const data = [{
    id: "dashboards",
    icon: "iconsminds-shop-4",
    label: "menu.dashboards",
    to: "/app/dashboards",
    subs: [{
        icon: "simple-icon-briefcase",
        label: "menu.default",
        to: "/app/dashboards/default"
    }]
},
{
    id: "pages",
    icon: "iconsminds-digital-drawing",
    label: "menu.pages",
    to: "/app/pages",
    subs: [
    {
        id: "pages-product",
        label: "menu.product",
        to: "/app/pages/product",
        subs: [{
            icon: "simple-icon-credit-card",
            label: "menu.data-list",
            to: "/app/pages/product/data-list"
        }
        ]
    }]
}];
export default data;
