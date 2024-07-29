import {
  ChevronRightIcon,
  CreditCardIcon,
  LogOutIcon,
  MailIcon,
  MessageSquareIcon,
  PlusCircleIcon,
  SettingsIcon,
  UserIcon,
  UserPlusIcon,
} from 'lucide-solid'
import type { Meta } from 'storybook-solidjs'
import { HStack } from 'styled-system/jsx'
import { Button } from '~/components/ui/button'
import { Menu } from '~/components/ui/menu'
import { Text } from '~/components/ui/text'

const meta: Meta = {
  title: 'Components/Menu',
}

export default meta

export const Base = () => {
  return (
    <Menu.Root>
      <Menu.Trigger asChild={(props) => <Button variant="outline" {...props()} />}>
        Open Menu
      </Menu.Trigger>
      <Menu.Positioner>
        <Menu.Content>
          <Menu.ItemGroup>
            <Menu.ItemGroupLabel>My Account</Menu.ItemGroupLabel>
            <Menu.Separator />
            <Menu.Item value="profile">
              <HStack gap="6" justifyContent="space-between" flex="1">
                <HStack gap="2">
                  <UserIcon />
                  Profile
                </HStack>
                <Text as="span" color="fg.subtle" size="sm">
                  ⇧⌘P
                </Text>
              </HStack>
            </Menu.Item>
            <Menu.Item value="billing">
              <HStack gap="2">
                <CreditCardIcon /> Billing
              </HStack>
            </Menu.Item>
            <Menu.Item value="settings">
              <HStack gap="6" justifyContent="space-between" flex="1">
                <HStack gap="2">
                  <SettingsIcon /> Settings
                </HStack>
                <Text as="span" color="fg.subtle" size="sm">
                  ⌘,
                </Text>
              </HStack>
            </Menu.Item>
            <Menu.Root positioning={{ placement: 'right-start', gutter: -2 }}>
              <Menu.TriggerItem justifyContent="space-between">
                <HStack gap="2">
                  <UserPlusIcon />
                  Invite member
                </HStack>
                <ChevronRightIcon />
              </Menu.TriggerItem>
              <Menu.Positioner>
                <Menu.Content>
                  <Menu.Item value="email">
                    <HStack gap="2">
                      <MailIcon /> Email
                    </HStack>
                  </Menu.Item>
                  <Menu.Item value="message">
                    <HStack gap="2">
                      <MessageSquareIcon /> Message
                    </HStack>
                  </Menu.Item>
                  <Menu.Separator />
                  <Menu.Item value="other">
                    <HStack gap="2">
                      <PlusCircleIcon />
                      More Options...
                    </HStack>
                  </Menu.Item>
                </Menu.Content>
              </Menu.Positioner>
            </Menu.Root>
            <Menu.Separator />
            <Menu.Item value="logout">
              <HStack gap="2">
                <LogOutIcon />
                Logout
              </HStack>
            </Menu.Item>
          </Menu.ItemGroup>
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  )
}
