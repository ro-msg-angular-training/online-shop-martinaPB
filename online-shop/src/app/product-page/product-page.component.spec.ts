import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductPageComponent } from './product-page.component';
import { NavigationExtras, Router, ActivatedRoute } from '@angular/router';
import * as fromApp from '../store/reducers/app.reducer';
import { CartItemsService } from '../cart-items.service';
import { provideMockStore } from '@ngrx/store/testing';

fdescribe('ProductPageComponent', () => {
  let component: ProductPageComponent;
  let fixture: ComponentFixture<ProductPageComponent>;
  const initialState = {
    productList:
    {
      productDetail: {
        id: 1,
        name: 'Notebook Basic 15',
        category: 'Laptops',
        image: 'https://sapui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1000.jpg',
        price: 956,
        description: 'Notebook Basic 15 with 2,80 GHz quad core, 15\" LCD, 4 GB DDR3 RAM, 500 GB Hard Disc, Windows 8 Pro'
      }
    },
  } as fromApp.IAppState;
  const mockRouter = {
    navigate(commands: any[], extras?: NavigationExtras) { }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProductPageComponent
      ],
      providers: [
        provideMockStore({ initialState }),
        {
          provide: Router,
          useValue: mockRouter
        },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { paramMap: { get: () => 1 } }
          }
        },
        {
          provide: CartItemsService,
          useValue: {
            getItems: jasmine.createSpy()
          }
        }
      ]
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should create ProductPageComponent', async(() => {
    expect(component).toBeDefined();
  }));
  fit('should have as title "Product: "' + initialState.productList.productDetail.name, async(() => {
    const element = fixture.nativeElement;
    const h1 = element.querySelector('h1');
    const expectdResult = 'Product: ' + initialState.productList.productDetail.name;
    expect(h1.textContent).toEqual(expectdResult);
  }));
  fit('should have as description ' + initialState.productList.productDetail.description, async(() => {
    const element = fixture.nativeElement;
    const p = element.querySelector('p');
    const expectdResult = initialState.productList.productDetail.description;
    console.log(initialState);
    expect(p.textContent).toEqual(expectdResult);
  }));
});