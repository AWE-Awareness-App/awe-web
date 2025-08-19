# WorkshopsApi

All URIs are relative to *http://localhost:5000*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**workshopsGet**](#workshopsget) | **GET** /workshops | Get all workshops|
|[**workshopsIdDelete**](#workshopsiddelete) | **DELETE** /workshops/{id} | Delete a workshop|
|[**workshopsIdGet**](#workshopsidget) | **GET** /workshops/{id} | Get a workshop by ID|
|[**workshopsIdPut**](#workshopsidput) | **PUT** /workshops/{id} | Update a workshop|
|[**workshopsPost**](#workshopspost) | **POST** /workshops | Create a new workshop|

# **workshopsGet**
> Array<Workshop> workshopsGet()


### Example

```typescript
import {
    WorkshopsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new WorkshopsApi(configuration);

const { status, data } = await apiInstance.workshopsGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<Workshop>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful response |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **workshopsIdDelete**
> workshopsIdDelete()


### Example

```typescript
import {
    WorkshopsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new WorkshopsApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.workshopsIdDelete(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | Workshop deleted successfully |  -  |
|**403** | Unauthorized to delete workshop |  -  |
|**404** | Workshop not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **workshopsIdGet**
> Workshop workshopsIdGet()


### Example

```typescript
import {
    WorkshopsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new WorkshopsApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.workshopsIdGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**Workshop**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful response |  -  |
|**404** | Workshop not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **workshopsIdPut**
> Workshop workshopsIdPut(workshopsPostRequest)


### Example

```typescript
import {
    WorkshopsApi,
    Configuration,
    WorkshopsPostRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new WorkshopsApi(configuration);

let id: string; // (default to undefined)
let workshopsPostRequest: WorkshopsPostRequest; //

const { status, data } = await apiInstance.workshopsIdPut(
    id,
    workshopsPostRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **workshopsPostRequest** | **WorkshopsPostRequest**|  | |
| **id** | [**string**] |  | defaults to undefined|


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
|**200** | Workshop updated successfully |  -  |
|**400** | Invalid input |  -  |
|**403** | Unauthorized to update workshop |  -  |
|**404** | Workshop not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **workshopsPost**
> Workshop workshopsPost(workshopsPostRequest)


### Example

```typescript
import {
    WorkshopsApi,
    Configuration,
    WorkshopsPostRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new WorkshopsApi(configuration);

let workshopsPostRequest: WorkshopsPostRequest; //

const { status, data } = await apiInstance.workshopsPost(
    workshopsPostRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **workshopsPostRequest** | **WorkshopsPostRequest**|  | |


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

