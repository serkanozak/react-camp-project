import React from 'react'
import { Dropdown, Menu, Image } from 'semantic-ui-react'

export default function SignedIn({ signOut }) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="C:\Users\USER\OneDrive\Masaüstü\kişisel\G-MbQO7v_400x400.jpg" />
                <Dropdown pointing="top left" text="Serkan">
                    <Dropdown.Menu>
                        <Dropdown.Item text="Bilgilerim" icon="info" />
                        <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out" />
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}
