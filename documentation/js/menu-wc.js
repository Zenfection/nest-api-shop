'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">nest-api-shop documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-ccbd23b064dcba0f2f8a51822a905486a5cfb8427d972b7590b27d99d83a49077e4b509c5da62f2a5f912272bae467af38ae8be6fe1898a0c10624ca8009f02b"' : 'data-bs-target="#xs-controllers-links-module-AppModule-ccbd23b064dcba0f2f8a51822a905486a5cfb8427d972b7590b27d99d83a49077e4b509c5da62f2a5f912272bae467af38ae8be6fe1898a0c10624ca8009f02b"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-ccbd23b064dcba0f2f8a51822a905486a5cfb8427d972b7590b27d99d83a49077e4b509c5da62f2a5f912272bae467af38ae8be6fe1898a0c10624ca8009f02b"' :
                                            'id="xs-controllers-links-module-AppModule-ccbd23b064dcba0f2f8a51822a905486a5cfb8427d972b7590b27d99d83a49077e4b509c5da62f2a5f912272bae467af38ae8be6fe1898a0c10624ca8009f02b"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-ccbd23b064dcba0f2f8a51822a905486a5cfb8427d972b7590b27d99d83a49077e4b509c5da62f2a5f912272bae467af38ae8be6fe1898a0c10624ca8009f02b"' : 'data-bs-target="#xs-injectables-links-module-AppModule-ccbd23b064dcba0f2f8a51822a905486a5cfb8427d972b7590b27d99d83a49077e4b509c5da62f2a5f912272bae467af38ae8be6fe1898a0c10624ca8009f02b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-ccbd23b064dcba0f2f8a51822a905486a5cfb8427d972b7590b27d99d83a49077e4b509c5da62f2a5f912272bae467af38ae8be6fe1898a0c10624ca8009f02b"' :
                                        'id="xs-injectables-links-module-AppModule-ccbd23b064dcba0f2f8a51822a905486a5cfb8427d972b7590b27d99d83a49077e4b509c5da62f2a5f912272bae467af38ae8be6fe1898a0c10624ca8009f02b"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-2e2057fb1833e23fc29e8d4325c75396d94b745dad7a2b4c252fe0925377033c3cd027338957c76bcb64541796aede8adf1e05802ba18f183605cadbd4bd0eb9"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-2e2057fb1833e23fc29e8d4325c75396d94b745dad7a2b4c252fe0925377033c3cd027338957c76bcb64541796aede8adf1e05802ba18f183605cadbd4bd0eb9"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-2e2057fb1833e23fc29e8d4325c75396d94b745dad7a2b4c252fe0925377033c3cd027338957c76bcb64541796aede8adf1e05802ba18f183605cadbd4bd0eb9"' :
                                            'id="xs-controllers-links-module-AuthModule-2e2057fb1833e23fc29e8d4325c75396d94b745dad7a2b4c252fe0925377033c3cd027338957c76bcb64541796aede8adf1e05802ba18f183605cadbd4bd0eb9"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-2e2057fb1833e23fc29e8d4325c75396d94b745dad7a2b4c252fe0925377033c3cd027338957c76bcb64541796aede8adf1e05802ba18f183605cadbd4bd0eb9"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-2e2057fb1833e23fc29e8d4325c75396d94b745dad7a2b4c252fe0925377033c3cd027338957c76bcb64541796aede8adf1e05802ba18f183605cadbd4bd0eb9"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-2e2057fb1833e23fc29e8d4325c75396d94b745dad7a2b4c252fe0925377033c3cd027338957c76bcb64541796aede8adf1e05802ba18f183605cadbd4bd0eb9"' :
                                        'id="xs-injectables-links-module-AuthModule-2e2057fb1833e23fc29e8d4325c75396d94b745dad7a2b4c252fe0925377033c3cd027338957c76bcb64541796aede8adf1e05802ba18f183605cadbd4bd0eb9"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CaslModule.html" data-type="entity-link" >CaslModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CommonModule.html" data-type="entity-link" >CommonModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-24c423c6fedd2089082ff7290528e2e700dd9d62e97cceb31cd5ef46989d6ffa6b512b5009b95b609b1f4a24a26e0839a59cb51f148c8fa25afda552e3ca69b0"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-24c423c6fedd2089082ff7290528e2e700dd9d62e97cceb31cd5ef46989d6ffa6b512b5009b95b609b1f4a24a26e0839a59cb51f148c8fa25afda552e3ca69b0"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-24c423c6fedd2089082ff7290528e2e700dd9d62e97cceb31cd5ef46989d6ffa6b512b5009b95b609b1f4a24a26e0839a59cb51f148c8fa25afda552e3ca69b0"' :
                                            'id="xs-controllers-links-module-UsersModule-24c423c6fedd2089082ff7290528e2e700dd9d62e97cceb31cd5ef46989d6ffa6b512b5009b95b609b1f4a24a26e0839a59cb51f148c8fa25afda552e3ca69b0"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-24c423c6fedd2089082ff7290528e2e700dd9d62e97cceb31cd5ef46989d6ffa6b512b5009b95b609b1f4a24a26e0839a59cb51f148c8fa25afda552e3ca69b0"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-24c423c6fedd2089082ff7290528e2e700dd9d62e97cceb31cd5ef46989d6ffa6b512b5009b95b609b1f4a24a26e0839a59cb51f148c8fa25afda552e3ca69b0"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-24c423c6fedd2089082ff7290528e2e700dd9d62e97cceb31cd5ef46989d6ffa6b512b5009b95b609b1f4a24a26e0839a59cb51f148c8fa25afda552e3ca69b0"' :
                                        'id="xs-injectables-links-module-UsersModule-24c423c6fedd2089082ff7290528e2e700dd9d62e97cceb31cd5ef46989d6ffa6b512b5009b95b609b1f4a24a26e0839a59cb51f148c8fa25afda552e3ca69b0"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AuthEntity.html" data-type="entity-link" >AuthEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/CaslAbilityFactory.html" data-type="entity-link" >CaslAbilityFactory</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/HttpExceptionFilter.html" data-type="entity-link" >HttpExceptionFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginDto.html" data-type="entity-link" >LoginDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserEntity.html" data-type="entity-link" >UserEntity</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/JwtAuthGuard.html" data-type="entity-link" >JwtAuthGuard</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#guards-links"' :
                            'data-bs-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AbilitiesGuard.html" data-type="entity-link" >AbilitiesGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/RolesGuard.html" data-type="entity-link" >RolesGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/IAbilityMeta.html" data-type="entity-link" >IAbilityMeta</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});