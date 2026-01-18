# OrderAPIApi

All URIs are relative to *https://exchange-example.switchflow.biz*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getOrders**](#getorders) | **GET** /orders | 환전 주문 내역 조회|
|[**getQuote**](#getquote) | **GET** /orders/quote | 환전 주문 견적 조회|
|[**order**](#order) | **POST** /orders | 환전 주문 요청|

# **getOrders**
> ApiResponseListOrderResponse getOrders()

회원의 환전 주문 내역을 조회합니다.

### Example

```typescript
import {
    OrderAPIApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OrderAPIApi(configuration);

const { status, data } = await apiInstance.getOrders();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ApiResponseListOrderResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getQuote**
> ApiResponseOrderQuoteResponse getQuote()

         환전 주문을 위한 견적을 조회합니다.         - 외화 매수인 경우, 해당 외화를 매수하기 위해 필요한 KRW 금액을 반환합니다.         - 외화 매도인 경우, 해당 외화를 매도했을 때 받을 수 있는 KRW 금액을 반환합니다.     

### Example

```typescript
import {
    OrderAPIApi,
    Configuration,
    OrderQuoteRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new OrderAPIApi(configuration);

let request: OrderQuoteRequest; // (default to undefined)

const { status, data } = await apiInstance.getQuote(
    request
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **request** | **OrderQuoteRequest** |  | defaults to undefined|


### Return type

**ApiResponseOrderQuoteResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **order**
> ApiResponseUnit order(orderRequest)

         회원이 환전 주문을 요청합니다.         - fromCurrency가 KRW인 경우, 외화를 매수하는 주문입니다.         - fromCurrency가 외화인 경우, 외화를 매도하는 주문입니다.         - code: EXCHANGE_RATE_MISMATCH 400 에러 발생 시, 최신 환율을 다시 조회하여 주문을 시도해야 합니다.     

### Example

```typescript
import {
    OrderAPIApi,
    Configuration,
    OrderRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new OrderAPIApi(configuration);

let orderRequest: OrderRequest; //

const { status, data } = await apiInstance.order(
    orderRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **orderRequest** | **OrderRequest**|  | |


### Return type

**ApiResponseUnit**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

