# ExchangeRateAPIApi

All URIs are relative to *https://exchange-example.switchflow.biz*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getLatestExchangeRates**](#getlatestexchangerates) | **GET** /exchange-rates/latest | 최신 환율 조회|

# **getLatestExchangeRates**
> ApiResponseListExchangeRateResponse getLatestExchangeRates()

최신 환율을 조회합니다.

### Example

```typescript
import {
    ExchangeRateAPIApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ExchangeRateAPIApi(configuration);

const { status, data } = await apiInstance.getLatestExchangeRates();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ApiResponseListExchangeRateResponse**

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

