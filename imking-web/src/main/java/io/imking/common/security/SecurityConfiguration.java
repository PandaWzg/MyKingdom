package io.imking.common.security;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Configurable;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

import io.imking.common.services.MyUserDetailsService;

@Configurable
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {

	static final String SELF_CSRF_COOKIE_NAME = "_token";

	protected static final String[] AUTH_WHITELIST = { "/api/user/findPassward" };

	@Autowired
	protected DataSource dataSource;

	@Autowired
	protected MyUserDetailsService userDetailsService;

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.cors().and().csrf().disable().authorizeRequests().antMatchers("/").permitAll()
				.antMatchers(HttpMethod.POST, "/api/user/signup")
				.permitAll().antMatchers("/common/**", "/courses/**",
					"/my/**", "/office/**", "/opensource/**", "/reward/**", "/biz/**" , "/api/biz/**")
				.permitAll().anyRequest().authenticated().and();
	}

}