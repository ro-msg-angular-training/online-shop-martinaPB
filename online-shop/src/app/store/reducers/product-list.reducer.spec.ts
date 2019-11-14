import { ProductListReducer, initialState } from "./product-list.reducer";

fdescribe('ProductListReducer', () => {
    fit('should return the default state', () => {
        const action = { type: 'NOOP' } as any;
        const result = ProductListReducer(undefined, action);

        expect(result).toBe(initialState);
    });
});

const mockProductDetail = {
    id: 1,
    name: 'Notebook Basic 15',
    category: 'Laptops',
    image: 'https://sapui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1000.jpg',
    price: 956,
    description: 'Notebook Basic 15 with 2,80 GHz quad core, 15\" LCD, 4 GB DDR3 RAM, 500 GB Hard Disc, Windows 8 Pro'
}