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
                                            'data-bs-target="#controllers-links-module-AppModule-9b4b4912ffed0509642085174e4ac94a24d976c63a2170033a86089e72df0970cc22ce4e5e4fdba2a048b32d06ecb3fd78e8f6a3932d7e4f4661ea379f52ce99"' : 'data-bs-target="#xs-controllers-links-module-AppModule-9b4b4912ffed0509642085174e4ac94a24d976c63a2170033a86089e72df0970cc22ce4e5e4fdba2a048b32d06ecb3fd78e8f6a3932d7e4f4661ea379f52ce99"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-9b4b4912ffed0509642085174e4ac94a24d976c63a2170033a86089e72df0970cc22ce4e5e4fdba2a048b32d06ecb3fd78e8f6a3932d7e4f4661ea379f52ce99"' :
                                            'id="xs-controllers-links-module-AppModule-9b4b4912ffed0509642085174e4ac94a24d976c63a2170033a86089e72df0970cc22ce4e5e4fdba2a048b32d06ecb3fd78e8f6a3932d7e4f4661ea379f52ce99"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-9b4b4912ffed0509642085174e4ac94a24d976c63a2170033a86089e72df0970cc22ce4e5e4fdba2a048b32d06ecb3fd78e8f6a3932d7e4f4661ea379f52ce99"' : 'data-bs-target="#xs-injectables-links-module-AppModule-9b4b4912ffed0509642085174e4ac94a24d976c63a2170033a86089e72df0970cc22ce4e5e4fdba2a048b32d06ecb3fd78e8f6a3932d7e4f4661ea379f52ce99"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-9b4b4912ffed0509642085174e4ac94a24d976c63a2170033a86089e72df0970cc22ce4e5e4fdba2a048b32d06ecb3fd78e8f6a3932d7e4f4661ea379f52ce99"' :
                                        'id="xs-injectables-links-module-AppModule-9b4b4912ffed0509642085174e4ac94a24d976c63a2170033a86089e72df0970cc22ce4e5e4fdba2a048b32d06ecb3fd78e8f6a3932d7e4f4661ea379f52ce99"' }>
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
                                <a href="modules/CommonModule.html" data-type="entity-link" >CommonModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-53e1294ce408ed3c2dc9337632c024b314ddf7db2ca6e399ecd0cb14107fc0dbcfc4d72cf46e7f5224603c64b53a55226af36e27621d123e51465b076581ffba"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-53e1294ce408ed3c2dc9337632c024b314ddf7db2ca6e399ecd0cb14107fc0dbcfc4d72cf46e7f5224603c64b53a55226af36e27621d123e51465b076581ffba"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-53e1294ce408ed3c2dc9337632c024b314ddf7db2ca6e399ecd0cb14107fc0dbcfc4d72cf46e7f5224603c64b53a55226af36e27621d123e51465b076581ffba"' :
                                            'id="xs-controllers-links-module-UsersModule-53e1294ce408ed3c2dc9337632c024b314ddf7db2ca6e399ecd0cb14107fc0dbcfc4d72cf46e7f5224603c64b53a55226af36e27621d123e51465b076581ffba"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-53e1294ce408ed3c2dc9337632c024b314ddf7db2ca6e399ecd0cb14107fc0dbcfc4d72cf46e7f5224603c64b53a55226af36e27621d123e51465b076581ffba"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-53e1294ce408ed3c2dc9337632c024b314ddf7db2ca6e399ecd0cb14107fc0dbcfc4d72cf46e7f5224603c64b53a55226af36e27621d123e51465b076581ffba"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-53e1294ce408ed3c2dc9337632c024b314ddf7db2ca6e399ecd0cb14107fc0dbcfc4d72cf46e7f5224603c64b53a55226af36e27621d123e51465b076581ffba"' :
                                        'id="xs-injectables-links-module-UsersModule-53e1294ce408ed3c2dc9337632c024b314ddf7db2ca6e399ecd0cb14107fc0dbcfc4d72cf46e7f5224603c64b53a55226af36e27621d123e51465b076581ffba"' }>
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
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
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