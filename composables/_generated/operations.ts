import type { GraphQLResolveInfo } from 'graphql';
import type { DocumentNode } from 'graphql';
import * as VueApolloComposable from '@vue/apollo-composable';
import type * as VueCompositionApi from 'vue';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
export type ReactiveFunction<TParam> = () => TParam;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Continent = {
  code?: Maybe<Scalars['String']['output']>;
  countries?: Maybe<Array<Maybe<Country>>>;
  name?: Maybe<Scalars['String']['output']>;
};

export type ContinentInput = {
  code: Scalars['String']['input'];
  countries?: InputMaybe<Array<InputMaybe<CountryInput>>>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Country = {
  awsRegion?: Maybe<Scalars['String']['output']>;
  capital?: Maybe<Scalars['String']['output']>;
  code?: Maybe<Scalars['String']['output']>;
  continent?: Maybe<Continent>;
  currencies?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  currency?: Maybe<Scalars['String']['output']>;
  emoji?: Maybe<Scalars['String']['output']>;
  emojiU?: Maybe<Scalars['String']['output']>;
  languages?: Maybe<Array<Maybe<Language>>>;
  name?: Maybe<Scalars['String']['output']>;
  native?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  phones?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  states?: Maybe<Array<Maybe<State>>>;
};

export type CountryInput = {
  awsRegion?: InputMaybe<Scalars['String']['input']>;
  capital?: InputMaybe<Scalars['String']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  continent?: InputMaybe<ContinentInput>;
  currencies?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  currency?: InputMaybe<Scalars['String']['input']>;
  emoji?: InputMaybe<Scalars['String']['input']>;
  emojiU?: InputMaybe<Scalars['String']['input']>;
  languages?: InputMaybe<Array<InputMaybe<LanguageInput>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  native?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  phones?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  states?: InputMaybe<Array<InputMaybe<StateInput>>>;
};

export type Language = {
  code?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  native?: Maybe<Scalars['String']['output']>;
  rtl?: Maybe<Scalars['Boolean']['output']>;
};

export type LanguageInput = {
  code: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  native?: InputMaybe<Scalars['String']['input']>;
  rtl?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Mutation = {
  addCountry?: Maybe<Country>;
  deleteCountry?: Maybe<Scalars['Boolean']['output']>;
  updateCountry?: Maybe<Country>;
};


export type MutationAddCountryArgs = {
  awsRegion?: InputMaybe<Scalars['String']['input']>;
  capital?: InputMaybe<Scalars['String']['input']>;
  code: Scalars['String']['input'];
  continent?: InputMaybe<ContinentInput>;
  currencies?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  currency?: InputMaybe<Scalars['String']['input']>;
  emoji?: InputMaybe<Scalars['String']['input']>;
  emojiU?: InputMaybe<Scalars['String']['input']>;
  languages?: InputMaybe<Array<InputMaybe<LanguageInput>>>;
  name: Scalars['String']['input'];
  native?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  phones?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  states?: InputMaybe<Array<InputMaybe<StateInput>>>;
};


export type MutationDeleteCountryArgs = {
  code: Scalars['String']['input'];
};


export type MutationUpdateCountryArgs = {
  code: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Query = {
  countries?: Maybe<Array<Maybe<Country>>>;
};

export type State = {
  code?: Maybe<Scalars['String']['output']>;
};

export type StateInput = {
  code?: InputMaybe<Scalars['String']['input']>;
};

export type CountriesQueryVariables = Exact<{ [key: string]: never; }>;


export type CountriesQuery = { countries?: Array<{ code?: string | null, name?: string | null, emoji?: string | null, phone?: string | null, emojiU?: string | null, native?: string | null, phones?: Array<string | null> | null, capital?: string | null, currency?: string | null, awsRegion?: string | null, currencies?: Array<string | null> | null, states?: Array<{ code?: string | null } | null> | null, continent?: { code?: string | null, name?: string | null, countries?: Array<{ capital?: string | null, currency?: string | null } | null> | null } | null, languages?: Array<{ rtl?: boolean | null, code?: string | null, name?: string | null, native?: string | null } | null> | null } | null> | null };


export const CountriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Countries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"emoji"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"emojiU"}},{"kind":"Field","name":{"kind":"Name","value":"native"}},{"kind":"Field","name":{"kind":"Name","value":"phones"}},{"kind":"Field","name":{"kind":"Name","value":"states"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"capital"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"awsRegion"}},{"kind":"Field","name":{"kind":"Name","value":"continent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"countries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"capital"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"currencies"}},{"kind":"Field","name":{"kind":"Name","value":"languages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rtl"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"native"}}]}}]}}]}}]} as unknown as DocumentNode;

/**
 * __useCountriesQuery__
 *
 * To run a query within a Vue component, call `useCountriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCountriesQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useCountriesQuery();
 */
export function useCountriesQuery(options: VueApolloComposable.UseQueryOptions<CountriesQuery, CountriesQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<CountriesQuery, CountriesQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<CountriesQuery, CountriesQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<CountriesQuery, CountriesQueryVariables>(CountriesDocument, {}, options);
}
export function useCountriesLazyQuery(options: VueApolloComposable.UseQueryOptions<CountriesQuery, CountriesQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<CountriesQuery, CountriesQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<CountriesQuery, CountriesQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<CountriesQuery, CountriesQueryVariables>(CountriesDocument, {}, options);
}
export type CountriesQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<CountriesQuery, CountriesQueryVariables>;


export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Continent: ResolverTypeWrapper<Continent>;
  ContinentInput: ContinentInput;
  Country: ResolverTypeWrapper<Country>;
  CountryInput: CountryInput;
  Language: ResolverTypeWrapper<Language>;
  LanguageInput: LanguageInput;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  State: ResolverTypeWrapper<State>;
  StateInput: StateInput;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean']['output'];
  Continent: Continent;
  ContinentInput: ContinentInput;
  Country: Country;
  CountryInput: CountryInput;
  Language: Language;
  LanguageInput: LanguageInput;
  Mutation: {};
  Query: {};
  State: State;
  StateInput: StateInput;
  String: Scalars['String']['output'];
};

export type SpecifiedByDirectiveArgs = {
  url: Scalars['String']['input'];
};

export type SpecifiedByDirectiveResolver<Result, Parent, ContextType = any, Args = SpecifiedByDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type ContinentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Continent'] = ResolversParentTypes['Continent']> = {
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  countries?: Resolver<Maybe<Array<Maybe<ResolversTypes['Country']>>>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CountryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Country'] = ResolversParentTypes['Country']> = {
  awsRegion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  capital?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  continent?: Resolver<Maybe<ResolversTypes['Continent']>, ParentType, ContextType>;
  currencies?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  currency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  emoji?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  emojiU?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  languages?: Resolver<Maybe<Array<Maybe<ResolversTypes['Language']>>>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  native?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phones?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  states?: Resolver<Maybe<Array<Maybe<ResolversTypes['State']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LanguageResolvers<ContextType = any, ParentType extends ResolversParentTypes['Language'] = ResolversParentTypes['Language']> = {
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  native?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rtl?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  addCountry?: Resolver<Maybe<ResolversTypes['Country']>, ParentType, ContextType, RequireFields<MutationAddCountryArgs, 'code' | 'name'>>;
  deleteCountry?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationDeleteCountryArgs, 'code'>>;
  updateCountry?: Resolver<Maybe<ResolversTypes['Country']>, ParentType, ContextType, RequireFields<MutationUpdateCountryArgs, 'code'>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  countries?: Resolver<Maybe<Array<Maybe<ResolversTypes['Country']>>>, ParentType, ContextType>;
};

export type StateResolvers<ContextType = any, ParentType extends ResolversParentTypes['State'] = ResolversParentTypes['State']> = {
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Continent?: ContinentResolvers<ContextType>;
  Country?: CountryResolvers<ContextType>;
  Language?: LanguageResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  State?: StateResolvers<ContextType>;
};

export type DirectiveResolvers<ContextType = any> = {
  specifiedBy?: SpecifiedByDirectiveResolver<any, any, ContextType>;
};
