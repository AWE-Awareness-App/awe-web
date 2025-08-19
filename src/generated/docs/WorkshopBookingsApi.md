# WorkshopBookingsApi

All URIs are relative to *http://localhost:5000*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**workshopBookingsPost**](#workshopbookingspost) | **POST** /workshopBookings | Create a new workshop booking|

# **workshopBookingsPost**
> Workshop workshopBookingsPost(workshopBookingsPostRequest)


### Example

```typescript
import {
    WorkshopBookingsApi,
    Configuration,
    WorkshopBookingsPostRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new WorkshopBookingsApi(configuration);

let workshopBookingsPostRequest: WorkshopBookingsPostRequest; //

const { status, data } = await apiInstance.workshopBookingsPost(
    workshopBookingsPostRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **workshopBookingsPostRequest** | **WorkshopBookingsPostRequest**|  | |


### Return type

**Workshop**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Workshop created successfully |  -  |
|**400** | Invalid input |  -  |
|**403** | Unauthorized to create workshop |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

