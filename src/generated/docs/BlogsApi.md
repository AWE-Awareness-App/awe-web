# BlogsApi

All URIs are relative to *http://localhost:3000*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**blogsGet**](#blogsget) | **GET** /blogs | Get paginated list of blog posts|
|[**blogsSlugGet**](#blogsslugget) | **GET** /blogs/{slug} | Get a blog post by slug|

# **blogsGet**
> BlogsGet200Response blogsGet()


### Example

```typescript
import {
    BlogsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BlogsApi(configuration);

let page: number; //Page number (optional) (default to 1)
let limit: number; //Number of items per page (optional) (default to 10)

const { status, data } = await apiInstance.blogsGet(
    page,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] | Page number | (optional) defaults to 1|
| **limit** | [**number**] | Number of items per page | (optional) defaults to 10|


### Return type

**BlogsGet200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of blog posts |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **blogsSlugGet**
> BlogPost blogsSlugGet()


### Example

```typescript
import {
    BlogsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BlogsApi(configuration);

let slug: string; //URL-friendly version of the blog post title (slug) (default to undefined)

const { status, data } = await apiInstance.blogsSlugGet(
    slug
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **slug** | [**string**] | URL-friendly version of the blog post title (slug) | defaults to undefined|


### Return type

**BlogPost**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Blog post details |  -  |
|**404** | Blog post not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

